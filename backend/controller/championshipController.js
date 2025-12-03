require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const fs = require("fs");
const axios = require("axios");
const Championship = require('../model/championshipModel');
const API_KEY = process.env.OPEN_AI_API_KEY;
const TIME_TO_REPEAT = 15

const championshipController = {
    getChampionship: async (req, res) =>{
            try{
                
                const includeOptions = {
                    model: User,
                    as: 'admin',
                    attributes: ['id', 'username', 'name', 'surname']
                };
                const championships = await Championship.findAll({where:{ id_admin: req.user.id}, include: [includeOptions]})
                if(!championships){
                    return res.status(400).json({message: "Crea il tuo primo campionato"})
                }
                console.log(championships)
                return res.status(200).json({message: "Tutti i tuoi campionati", championships: championships})
            }catch(e){
                return res.status(400).json({error: "Errore durante la ricerca", message: e.message})
            }
    },
    createChampionship: async (req, res) => {
        try {
            const { name, number_player, userId } = req.body;
            console.log()
            // Validazioni base,
            if (!name || typeof name !== "string" || name.trim() === "") {
                return res.status(400).json({ error: "Nome campionato non valido." });
            }

            if (!number_player || isNaN(Number(number_player))) {
                return res.status(400).json({ error: "Numero giocatori non valido." });
            }

            // Crea il campionato
            const newChampionship = await Championship.create({
                id_admin: req.user.id,
                name: name.trim(),
                number_player: Number(number_player),
            });

            // Associa i giocatori (molti-a-molti)
            if (Array.isArray(userId) && userId.length > 0) {
                await newChampionship.addUsers(userId.map(id => Number(id))); 
            }

            return res.status(201).json({
            message: "Campionato creato con successo",
            championship: newChampionship
            });

        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: "Errore nella creazione del campionato" });
        }
    },
    getUserJoinChampion: async (req, res) => {
        try {
            const championshipId = req.params.id;
            const idUser = req.user.id;

            // Trova il campionato con gli utenti associati
            const championship = await Championship.findByPk(championshipId, {
                include: [{
                    model: User,
                    through: { attributes: [] }
                }]
            });

            if (!championship) {
                return res.status(404).json({ message: "Campionato non trovato" });
            }

            
            const isParticipant = championship.Users.some(user => user.id === idUser);
            const isAdmin = championship.id_admin == idUser;
            if ((!isAdmin || !req.user.role == 'boss') &&  !isParticipant) {
                return res.status(403).json({ message: "Non sei iscritto a questo campionato" });
            }

            return res.status(200).json({usersJoin: championship.Users});
        } catch (e) {
            return res.status(400).json({ error: "C'è stato un errore nel processo", message: e.message });
        }
    }


}

module.exports = championshipController;