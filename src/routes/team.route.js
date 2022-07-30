const { Router } = require("express");

const {
    teamsGet,
    teamGet,
    teamGetByName,
} = require("../controllers/team.controller");
const router = Router();

router.get("/", teamsGet);
router.get("/:id", teamGet);
router.get("/name/:name", teamGetByName);


module.exports = router;
