const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos, validarArchivoSubir } = require("../middleware");

const {
  createPlayer,
  createTeamPlayerGuests,
} = require("../controllers/form.controller");
const router = Router();

router.post("/create/player", createPlayer);
router.post(
  "/create/team/players",
  [
    validarArchivoSubir,
    check("name_team", "El nombre del equipo es necesario").not().isEmpty(),
    check("players", "La lista de jugadores es necesario").not().isArray(),
    validarCampos,
  ],
  createTeamPlayerGuests
);

module.exports = router;
