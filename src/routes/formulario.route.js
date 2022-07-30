const { Router } = require("express");

const {
    formularioPost
} = require("../controllers/formulario.controller");
const router = Router();

router.post('/',formularioPost);

module.exports = router;
