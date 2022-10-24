const express = require("express");
const path = require("path");
const cors = require("cors");

const dbConnectionSql = require("./configDB");
const fileUpload = require("express-fileupload");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // this.authCustomerPath = '/api/auth/customer';
    this.playerPath = "/api/players";
    this.formPath = "/api/form";
    this.teamPath = "/api/teams";
    this.tournamentPath = "/api/tournament";

    //conectar a DB
    this.contectDB();

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();
  }

  async contectDB() {
    try {
      await dbConnectionSql.authenticate();
      console.log("Base de datos MySql conectado");
    } catch (error) {
      console.log("error" + error);
      // throw new Error( 'error'+error )
    }
  }
  middlewares() {
    //cors
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use(express.json());
    //carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  routes() {
    this.app.use(this.playerPath, require("./routes/player.route"));
    this.app.use(this.formPath, require("./routes/form.route"));
    this.app.use(this.teamPath, require("./routes/team.route"));
    this.app.use(this.tournamentPath, require("./routes/tournament.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor correindo en puerto", this.port);
    });
  }
}
module.exports = Server;
