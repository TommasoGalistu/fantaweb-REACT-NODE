const express = require('express')
const userController = require('../controller/userController');
const championshipController = require('../controller/championshipController');


const publicRouter = express.Router()
const privateRouter = express.Router()

const authMiddleware = require('../middleware/authMiddleware');
const allowRoles = require('../middleware/roleMiddleware');

// private router
privateRouter.use(authMiddleware)

privateRouter.get('/utente-autenticato',  (req,res) =>{
    res.status(200).json({message: "sei autorizzato"});
})
privateRouter.get('/logout', userController.logout)
privateRouter.get('/get-users', allowRoles('boss'), userController.getUsers)

privateRouter.get('/get-championship', allowRoles('boss', 'admin') , championshipController.getChampionship)
privateRouter.get('/get-users-join-champion/:id', championshipController.getUserJoinChampion)
privateRouter.get('/get-user/:id/:idUser', userController.getUser)
privateRouter.post('/create-championship', allowRoles('boss', 'admin') , championshipController.createChampionship)




// public router
publicRouter.post('/register', userController.register)
publicRouter.post('/login', userController.login)
publicRouter.get('/check-token', userController.checkToken)


// publicRouter.post('/try-api-key', userController.openAiText)


module.exports = {publicRouter, privateRouter}; 
