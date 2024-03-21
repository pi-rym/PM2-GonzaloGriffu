require("dotenv").config();
const app = require("./src/server");
const dbConnection = require("../back/src/config/dbConnection");

const { PORT } = process.env;

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("problemas con la conexion ");
  });
