"use strict";
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    static associate(models) {
      book.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      });
      book.hasMany(models.borrow, {
        as: "borrows",
        foreignKey: {
          name: "bookId",
        },
      });

      book.belongsToMany(models.category, {
        as: "categories",
        through: {
          model: "bookcategory",
          as: "bridge",
        },
        foreignKey: "bookId",
      });
    }
  }
  book.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      publisher: DataTypes.STRING,
      published: DataTypes.STRING,
      pages: DataTypes.STRING,
      isbn: DataTypes.STRING,
      image: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "book",
    }
  );
  return book;
};
