
const { request,response } = require('express'); 
const bcryptjs = require('bcryptjs');
const { omit } = require( 'lodash');

const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );

const {PlayersModel} = require('../models');

const playersGet = async( req = request , res = response ) => {
 
    try {   // console.log(PlayersModel)
    const players = await PlayersModel.findAll({
        where: {state: 1},
        attributes: {exclude: ['password','state','tk_notification','createdAt','updatedAt']}
    });
    res.json(players);
} catch (err) {
    res.status(404).json({
        msg: err
    });
  }
}

const playerGet = async( req = Request , res = Response ) => {
    const { id } = req.params;
    const player = await PlayersModel.findByPk( id ,{
        attributes: {exclude: ['password','state','tk_notification','createdAt','updatedAt']}});
    if( player ) {
        res.json(player);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }
}





const verifyPlayers = async( req = Request , res = Response ) => {
    const { body } = req;
    var countPlayers = 0;
    var players = [];
    try{
        for (let i = 0; i < body.length; i++) {
            const playerDni = await PlayersModel.findOne({ where:{dni:body[i].dni} })
            if( playerDni ){
                return res.status(404).json({
                    msg:`El jugador con el carnet ${ playerDni.dni } ya se encuentra registrado`
                })
            }else{
                const playerPhone = await PlayersModel.findOne({ where:{phone_number:body[i].phone_number} })
                if ( playerPhone ){
                    return res.status(404).json({
                        msg:`El jugador con el telefono ${ playerPhone.phone_number } ya se encuentra registrado`
                    })
                }else{
                    const playerNick = await PlayersModel.findOne({ where:{nick_name:body[i].nick_name.toUpperCase()} })
                    if( playerNick ){
                        return res.status(404).json({
                            msg:`El jugador con el nick ${ playerNick.nick_name } ya se encuentra registrado`
                        })
                    }else{
                        const playerEmail = await PlayersModel.findOne({ where:{email:body[i].email.toLowerCase()} })
                        if( playerEmail ){
                            return res.status(404).json({
                                msg:`El jugador con el correo ${ playerEmail.email } ya se encuentra registrado`
                            })
                        }else{
                            if(players.filter((e)=>e.dni==body[i].dni || e.phone_number == body[i].phone_number || e.nick_name == body[i].nick_name || e.email == body[i].email).length>0){
                                return res.status(404).json({
                                    msg:`El jugador con el carnet ${ body[i].dni } está repetido, revisa el registro`
                                })
                            }else{
                                players.push(body[i])
                                countPlayers++;
                            }
                        }
                    }
                }
            }
            if(countPlayers == body.length){
                res.json({msg:'Todo correcto'});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}



const playersAllPost = async  ( req = Request , res = Response ) => {
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
const playerPost = async  ( req = Request , res = Response ) => {
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

const playerPut = async( req = Request , res = Response ) => {

    const { id }   = req.params;
    const { body } = req;
    try {
        if ( body.password ) {
            const salt = bcryptjs.genSaltSync();
            body.password = bcryptjs.hashSync( body.password, salt );
        }
        const player = await PlayersModel.update(body,{where: {id: id}});
        res.json(player)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }

}
const playerPutByImage = async( req = Request , res = Response ) => {

    const { code }   = req.params;
    // const { body } = req;
    try {
        const player = await PlayersModel.findOne({ where:{cus_code:code} });
        if (!player) {
            res.status(404).json({
                msg: `No existe un usuario con el codigo ${ number }`
            });
        }
        if ( player.cus_img ) {
            const nombreArr = player.cus_img.split('/');
            const nombre    = nombreArr[ nombreArr.length - 1 ];
            const [ public_id ] = nombre.split('.');
            await cloudinary.uploader.destroy( 'players/'+public_id );
        }
        //agregar ubicación de la imagen
        const { tempFilePath } = req.files.archivo
        const { secure_url } = await cloudinary.uploader.upload( tempFilePath, {folder: 'players'} );
        //actualizar
        await PlayersModel.update({ cus_img:secure_url },{where: {id: player.id}});
        res.json({msg:'Estudiante actualizado'});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }

}

const playerDelete = async( req = Request , res = Response ) => {

    const { id }   = req.params;
    try {
        const player = await PlayersModel.update({cus_state:0},{where: {id: id}});
        res.json(player)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

module.exports = {
    playersGet,
    playerGet,
    verifyPlayers,
    playersAllPost,
    playerPut,
    playerPost,
    playerDelete,
    playerPutByImage
  };
  