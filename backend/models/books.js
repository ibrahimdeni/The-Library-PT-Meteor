"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //one book belongs to one user(belongsTo)
      book.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      });

      //book can has many borrows(hasMany)
      book.hasMany(models.borrow, {
        as: "borrows",
        foreignKey: {
          name: "bookId",
        },
      });

      //book belong to many categories(hasMany)
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
