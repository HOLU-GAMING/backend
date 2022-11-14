const { PlayersModel } = require("../models/index.js");
const dniExists = async (dni = "") => {
  // Verificar si el correo existe
  const existDNI = await PlayersModel.findOne({
    where: {
      dni: dni,
      state: 1,
    },
  });
  if (existDNI) {
    throw new Error(`El DNI: ${dni}, ya está registrado`);
  }
};
const nickNameExists = async (nick = "") => {
  // Verificar si el correo existe
  const existDNI = await PlayersModel.findOne({
    where: {
      nick_name: nick,
      state: 1,
    },
  });
  if (existDNI) {
    throw new Error(`El nick: ${nick}, ya está registrado`);
  }
};

const emailExists = async (email = "") => {
  // Verificar si el correo existe
  const existEmail = await PlayersModel.findOne({
    where: {
      email: email,
      state: 1,
    },
  });
  if (existEmail) {
    throw new Error(`El email: ${email}, ya está registrado`);
  }
};
const phoneExists = async (phone = "") => {
  // Verificar si el correo existe
  const existPhone = await PlayersModel.findOne({
    where: {
      phone_number: phone,
      state: 1,
    },
  });
  if (existPhone) {
    throw new Error(`El telefono: ${phone}, ya está registrado`);
  }
};

module.exports = {
  dniExists,
  nickNameExists,
  emailExists,
  phoneExists,
};
