
const { request,response } = require('express'); 
const bcryptjs = require('bcryptjs');
const { omit } = require( 'lodash');

const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );

const {PlayersModel} = require('../models');

const formularioPost = async  ( req = Request , res = Response ) => {
    const { body } = req;
    
    try {
        const player = new PlayersModel(body);
        //encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        player.password = bcryptjs.hashSync( body.password, salt );
        //agregar ubicación de la imagen
        const { tempFilePath } = req.files.archivo
        const { secure_url } = await cloudinary.uploader.upload( tempFilePath, {folder: 'players'} );
        player.image = secure_url;
        //guardar en BD
        await player.save();
        res.json(omit(player.toJSON(), 'password','createdAt','updatedAt'));

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

module.exports = {
    formularioPost
  };
  