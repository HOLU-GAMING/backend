const { request, response } = require("express");
const cloudinary = require("cloudinary").v2;
const { Op } = require("sequelize");
cloudinary.config(process.env.CLOUDINARY_URL);

const { TeamsModel } = require("../models");

const teamsGet = async (req = request, res = response) => {
  try {
    // console.log(PlayersModel)
    const players = await TeamsModel.findAll({
      where: { state: 1 },
      attributes: { exclude: ["state", "createdAt", "updatedAt"] },
    });
    res.json(players);
  } catch (err) {
    res.status(404).json({
      msg: err,
    });
  }
};

const teamGet = async (req = Request, res = Response) => {
  const { id } = req.params;
  const team = await TeamsModel.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  if (team) {
    res.json(team);
  } else {
    res.status(404).json({
      msg: `No existe un equipo con el id ${id}`,
    });
  }
};
const teamGetByName = async (req = Request, res = Response) => {
  const { name } = req.params;
  console.log(
    "🚀 ~ file: team.controller.js ~ line 37 ~ teamGetByName ~ name",
    name
  );

  const team = await TeamsModel.findOne({
    where: {
      name: name,
    },
    attributes: { exclude: ["state", "createdAt", "updatedAt"] },
  });
  if (team) {
    res.json(team);
  } else {
    res.status(404).json({
      msg: `No existe un equipo con el nombre ${name}`,
    });
  }
};

module.exports = {
  teamsGet,
  teamGet,
  teamGetByName,
};
