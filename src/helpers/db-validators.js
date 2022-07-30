// const Role = require('../models/role');
const {PlayersModel} = require('../models/index.js');

// const RoleValidate = async(rol = '') => {

//     const existeRol = await Role.findOne({ rol });
//     if ( !existeRol ) {
//         throw new Error(`El rol ${ rol } no está registrado en la BD`);
//     }
// }
const dniExists = async( dni = '' ) => {
    // Verificar si el correo existe
    const existDNI = await PlayersModel.findOne({
        where: {
            dni: dni
        }
    });
    if ( existDNI ) {
        throw new Error(`El DNI: ${ cus_code }, ya está registrado`);
    }
} 
const emailExists = async( email = '' ) => {
    // Verificar si el correo existe
    const existEmail = await PlayersModel.findOne({
        where: {
            email: email
        }
    });
    if ( existEmail ) {
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
}
const phoneExists = async( phone = '' ) => {
    // Verificar si el correo existe
    const existPhone = await PlayersModel.findOne({
        where: {
            phone_number: phone
        }
    });
    if ( existPhone ) {
        throw new Error(`El telefono: ${ phone }, ya está registrado`);
    }
}
const customerExistById = async ( id ) => {

    // Verificar si el correo existe
    const UserExist = await CustomerModel.findOne({
        where: {
            id: id
        }
    });
    if ( !UserExist ) {
        throw new Error(`El id no existe ${ id }`);
    }
}
const emailExistsById = async ( cus_mail ) => {
    // Verificar si el correo existe solo para el usuario
    const UserExist = await CustomerModel.findOne({
        where: {
            cus_mail: cus_mail
        }
    });
    if ( UserExist ) {
        if (UserExist.id!=id) {
            throw new Error(`El correo le pertenece a alguien ${ cus_mail }`);
        }
    }
}
const phoneExistsById = async ( cus_phone ) => {
    // Verificar si el correo existe solo para el usuario
    const UserExist = await CustomerModel.findOne({
        where: {
            cus_phone: cus_phone
        }
    });
    if ( UserExist ) {
        console.log(UserExist.id)
        console.log(id)
        if (UserExist.id!=id) {
            throw new Error(`El telefono le pertenece a alguien ${ cus_phone }`);
        }
    }
}
// const roleExists = async( rol = '' ) => {

//     // Verificar si el rol existe
//     const existeRol = await Role.findOne({rol});
//     if ( existeRol ) {
//         throw new Error(`El rol ${ rol }, ya está registrado`);
//     }
// }

module.exports = {
    // RoleValidate,
    dniExists,
    emailExists,
    phoneExists,
    customerExistById,
    emailExistsById,
    phoneExistsById
}

