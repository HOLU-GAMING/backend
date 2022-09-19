

const validaCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');
const validarArchivo = require('../middleware/validar-archivo');
// const validaRoles = require('../middlewares/validar-roles');

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validarArchivo,
    // ...validaRoles,
}