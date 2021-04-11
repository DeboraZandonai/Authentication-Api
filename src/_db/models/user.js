"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      email: DataTypes.STRING,
      data: DataTypes.STRING,
      cpf: DataTypes.STRING,
      cep: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {};
  return User;
};
