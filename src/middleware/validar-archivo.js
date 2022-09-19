const { response } = require("express")


const validarArchivoSubir = ( req = request, res = response, next ) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo ) {
        return res.status(400).json({
            msg: 'Deve enviar una imagen para continuar el proceso'
        });
    }

    next();

}

module.exports = {
    validarArchivoSubir
}
