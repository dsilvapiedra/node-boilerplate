const express = require("express");
const app = express(); // Crea un instancia de Express.
const routes = require("./routes");
const dotenv = require('dotenv');
dotenv.config();

routes(app);

app.listen(process.env.PORT || 3000, () => console.log(`Servidor corriendo en el puerto ${process.env.PORT || 3000}!`));
