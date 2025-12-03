require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const fs = require("fs");
const { Op } = require("sequelize");
const axios = require("axios");
const nodemailer = require("nodemailer");
const transporterPromise = require("../utils/emailConfig");
const Championship = require('../model/championshipModel');
const API_KEY = process.env.OPEN_AI_API_KEY;
const TIME_TO_REPEAT = 15


const userController = {
    register: async (req, res) =>{
        try{
            const existingUser = await User.findOne({
                    where: {
                        [Op.or]: [
                        { email: req.body.email },
                        { username: req.body.username }
                        ]
                    }
                    })
            
            if(existingUser){
                return res.status(400).json({error: "Email già presente"})
            }

            const passwordBcrypt = await bcrypt.hash(req.body.password, TIME_TO_REPEAT);
            const user = await User.create({
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                role: req.body.role || 'user',
                email: req.body.email,
                password: passwordBcrypt,
                
            });
            const transporter = await transporterPromise;

            const info = await transporter.sendMail({
                from: `"SUPERLEGA" <noreply@gmail.com>`, 
                to: req.body.email,
                subject: "Verifica il tuo account",
                html: `Benvenuto ${user.name},
                        per sfruttare al meglio il profilo ti chiedo di verificare l'email cliccando sul link.</br>
                        <a href="">Clicca sul link</a>
                        `,
            });

            return res.status(200).json({user: {}, message: "La registrazione ha avuto successo!"});
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    },
    login: async (req, res) =>{
        try{

            const {email, password} = req.body
            const user = await User.findOne({where: {email: email}})
            console.log(user)

            if(!user){
                return res.status(400).json({error: "Emeail o password errata"})
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({error: "Email o password errata"})
            }


            const token = jwt.sign(
                {id: user.id, email: user.email, ip: req.ip, role: user.role},
                process.env.JWT_SECRET,
                {
                    expiresIn: '1d'
                }
            )

            res.cookie('token', token, {
                httpOnly: true,  // Protegge il token da JavaScript (XSS)
                // // secure: process.env.NODE_ENV === "production", // Solo HTTPS in produzione
                // sameSite: "None", // Previene attacchi CSRF
                // secure: false, //Richiede HTTPS (NON funziona su localhost)
                maxAge: 24 * 60 * 60 * 1000, // Scadenza: 1 giorno
                // path: "/", // Disponibile su tutto il sito
                // domain: "tuodominio.com" // (Opzionale) Disponibile solo su questo dominio
            })

            return res.status(200).json({message: "Login riuscito!!", email})
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    },
    logout: async (req,res) => {

        try{
            const token = req.cookies.token; 

            if(!token){
                return res.status(400).json({error: "Errore nel logout, riprovare"})
            }
            res.clearCookie("token", {
                httpOnly: true
            });
            
            return res.status(200).json({message: "Logout effettuato con successo"})
        }catch(error){
            return res.status(400).json({error: error.message})
        }
        

        
    },
    checkToken: async (req, res) =>{
        try{
            const token = req.cookies.token; 
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            
            if(!decoded){
                return res.status(401).json({ error: "Non sei loggato, vai nella pagina login per loggarti!!" });
            }
            
            return res.status(200).json({message: "Puoi accedere all'area privata", user: decoded.email, role: decoded.role})
        }catch(error){
            return res.status(400).json({ error: "Non sei loggato, vai nella pagina login per loggarti!!" })
        }
    },
    openAiText: async (req, res) =>{
        try {
            const userMessage = "Ciao, come stai?";
            const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o", 
                messages: [
                {
                    role: "user",
                    content: userMessage,
                },
                ],
                max_tokens: 100,
            },
            {
                headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
                },
            }
            );

            console.log("Risposta del modello:");
            console.log(response.data.choices[0].message.content);
        } catch (error) {
            console.error("Errore:", error.response?.data || error.message);
        }
    },
    getUsers: async (req, res) =>{
        try{
            const users = await User.findAll({
                attributes: ['id', 'name', 'surname'],
                where: {
                    id: {
                    [Op.not]: req.user.id
                    }
                }
                });
            if(!users){
                return res.status(400).json({message: "Non ci sono users"})
            }

            return res.status(200).json({message: "Richiesta effettuata con successo", users: users})
        }catch(e){
            return res.status(400).json({error: "C'è stato un errore nella richiesta"})
        }
    },
    
    getUser: async (req, res) => {
        try {
            console.log('test dentro')
            const championshipId = parseInt(req.params.id);
            const targetUserId = parseInt(req.params.idUser);
            const loggedUserId = req.user.id;
            const isAdminOrBoss = (req.user.role == 'boss' || req.user.role == 'admin');
            // 1. Controlla se entrambi partecipano al campionato con quell'id
            const championship = await Championship.findByPk(championshipId, {
                include: {
                    model: User,
                    where: {
                        id: { [Op.in]: [targetUserId, loggedUserId] }
                    },
                    through: { attributes: [] }
                }
            });
            console.log('test role', !isAdminOrBoss && (!championship || championship.Users.length < 2))

            // 2. Devono esserci esattamente 2 utenti nel campionato
            if (!isAdminOrBoss && (!championship || championship.Users.length < 2)) {
                return res.status(403).json({
                    message: "Non siete entrambi partecipanti di questo campionato"
                });
            }

            // 3. Carica i dati del target user
            const targetUser = await User.findByPk(targetUserId, {
                attributes: ['id', 'username', 'name', 'surname']
            });

            if (!targetUser) {
            return res.status(404).json({ message: "Utente non trovato" });
            }

            return res.status(200).json({
            message: "Utente autorizzato ad avere informazioni",
            user: targetUser
            });

        } catch (e) {
            console.error(e);
            return res.status(500).json({
            error: "Errore nella richiesta",
            message: e.message
            });
        }
        }

}

module.exports = userController;