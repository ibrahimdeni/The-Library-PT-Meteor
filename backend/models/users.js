"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //one user just has one profile(hasOne)
      user.hasOne(models.profile, {
        as: "profile",
        foreignKey: {
          name: "userId",
        },
      });

      //but one user can has many books(hasMany)
      user.hasMany(models.book, {
        as: "books",
        foreignKey: {
          name: "bookId",
        },
      });

      //and one user can borrows many books(hasMany)
      user.hasMany(models.borrow, {
        as: "borrows",
        foreignKey: {
          name: "borrowId",
        },
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
