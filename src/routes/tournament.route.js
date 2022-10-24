const { Router } = require("express");

const {
    tournamentsGet,
    tournamentGet,
} = require("../controllers/tournament.controller");
const router = Router();

router.get("/", tournamentsGet);
router.get("/:id", tournamentGet);


module.exports = router;
