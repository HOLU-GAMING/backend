const bcryptjs = require("bcryptjs");
const { omit } = require("lodash");

const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const { PlayersModel, TeamsModel, GuestsModel } = require("../models");

const createPlayer = async (req = Request, res = Response) => {
  const { body } = req;

  try {
    const player = new PlayersModel(body);
    //encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    player.password = bcryptjs.hashSync(body.password, salt);
    //agregar ubicación de la imagen
    const { tempFilePath } = req.files.archivo;
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath, {
      folder: "players",
    });
    player.image = secure_url;
    //guardar en BD
    await player.save();
    res.json(omit(player.toJSON(), "password", "createdAt", "updatedAt"));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const createTeamPlayerGuests = async (req = Request, res = Response) => {
  const { body } = req;

  try {
    const team = new TeamsModel();
    team.name = body.name_team;
    //agregar ubicación de la imagen
    const { tempFilePath } = req.files.archivo;
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath, {
      folder: "teams",
    });
    team.image = secure_url;
    //guardar en BD
    await team.save();
    //agregar jugadores
    for await (const results of JSON.parse(body.players)) {
      const player = new PlayersModel(results);
      //encriptar contraseña
      const salt = bcryptjs.genSaltSync();
      player.password = bcryptjs.hashSync(results.email, salt);
      await player.save();
      //asociar como invitado
      const guest = new GuestsModel();
      guest.id_player = player.id;
      guest.id_team = team.id;
      await guest.save();
      //enviar correo para verificar si es el usuario real
      
    }
    res.json(omit(team.toJSON(), "createdAt", "updatedAt"));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  createPlayer,
  createTeamPlayerGuests,
};
