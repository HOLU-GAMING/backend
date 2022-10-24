const { request, response } = require("express");
const cloudinary = require("cloudinary").v2;
const { Op } = require("sequelize");
cloudinary.config(process.env.CLOUDINARY_URL);

const {
  TournamentsModel,
  GamesModel,
  TypeTournamentsModel,
  PlayersModel,
} = require("../models");

const tournamentsGet = async (req = request, res = response) => {
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

const tournamentGet = async (req = Request, res = Response) => {
  const { id } = req.params;
  try {
    const tournament = await TournamentsModel.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: GamesModel,
          required: true,
          attributes: ["name","image"],
          where: { state: 1 },
        },
        {
          model: TypeTournamentsModel,
          required: true,
          attributes: ["name"],
        },
        {
          model: PlayersModel,
          required: true,
          attributes: ["first_name", "last_name", "nick_name"],
          where: { state: 1 },
        },
      ],
    });
    if (tournament) {
      res.json(tournament);
    } else {
      res.status(404).json({
        msg: `No existe un torneo con el id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  tournamentsGet,
  tournamentGet,
};
