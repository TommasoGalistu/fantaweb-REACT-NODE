const express = require('express');
const cookieParser = require('cookie-parser');
const corsMiddleware = require('./middleware/cors');
const { publicRouter, privateRouter } = require('./routes/routes');
const sequelize = require('./config/db');
require('./model/associations'); 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(corsMiddleware);

app.use('/', publicRouter);
app.use('/user', privateRouter);

sequelize.sync().then(() => {
  console.log("Connesso a MySQL con Sequelize");
  app.listen(PORT, () => console.log(`Server attivo su http://localhost:${PORT}`));
}).catch(err => {
  console.error("Errore connessione al DB:", err);
});
