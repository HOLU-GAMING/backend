const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos, validarArchivoSubir } = require("../middleware");

const {
  dniExists,
  nickNameExists,
  emailExists,
  phoneExists,
  playerExistById,
} = require("../helpers/db-validators");

const {
  playersGet,
  playerGet,
  verifyPlayers,
  playersAllPost,
  playerPut,
  playerPost,
  playerDelete,
  playerPutByImage,
  registerPlayer,
  validatePlayer,
  changePassword,
  loginPlayer,
} = require("../controllers/player.controller");
const router = Router();

router.get("/", playersGet);
router.get("/:id", playerGet);
//verify players
router.post("/verify", verifyPlayers);
//register allPlayers
router.post("/all", playersAllPost);
router.post(
  "/register",
  [
    check("dni", "El DNI es obligatorio").not().isEmpty(),
    check("dni").custom(dniExists),
    check("nick_name", "El nick es obligatorio").not().isEmpty(),
    check("nick_name").custom(nickNameExists),
    check("email", "El correo no es válido").isEmail(),
    check("email").custom(emailExists),
    check("phone_number", "El número de contacto es obligatorio")
      .not()
      .isEmpty(),
    check("phone_number").custom(phoneExists),
    validarCampos,
  ],
  registerPlayer
);
router.post(
  "/validate/:id",
  [check("code", "El codigo es obligatorio").not().isEmpty(), validarCampos],
  validatePlayer
);
router.post(
  "/change/password/:id",
  [
    check("code", "El codigo es obligatorio").not().isEmpty(),
    check("password", "La contraseña debe de ser más de 6 letras").isLength(
      { min: 6 }
    ),
    validarCampos,
  ],
  changePassword
);
router.post(
  "/auth",
  [
    check("nick_name", "El nick es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  loginPlayer
);
router.post(
  "/",
  [
    // validarArchivoSubir,
    check("dni", "El DNI es obligatorio").not().isEmpty(),
    check("dni").custom(dniExists),
    check("first_name", "El nombre es obligatorio").not().isEmpty(),
    check("last_name", "El apellido es obligatorio").not().isEmpty(),
    check("nick_name", "El nick es obligatorio").not().isEmpty(),
    check("date_birth", "La fecha de nacimiento es obligatorio")
      .not()
      .isEmpty(),
    check("phone_number", "El número de contacto es obligatorio")
      .not()
      .isEmpty(),
    check("phone_number").custom(phoneExists),
    check("email", "El correo no es válido").isEmail(),
    check("email").custom(emailExists),
    check("nationality", "La nacionalidad es obligatorio").not().isEmpty(),
    check("gender", "El genero es obligatorio").not().isEmpty(),
    check("password", "El password debe de ser más de 6 letras").isLength({
      min: 6,
    }),
    check("tk_notification", "El token de notificación es obligatorio")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  playerPost
);

router.put(
  "/image/:code",
  [validarArchivoSubir, validarCampos],
  playerPutByImage
);
router.put(
  "/:id",
  [
    check("id").custom(playerExistById),
    check("cus_password", "La contrasena debe de ser más de 6 letras").isLength(
      { min: 6 }
    ),
    check("cus_mail", "El correo no es válido").isEmail(),
    validarCampos,
  ],
  playerPut
);

router.delete(
  "/:id",
  [check("id").custom(playerExistById), validarCampos],
  playerDelete
);

module.exports = router;
