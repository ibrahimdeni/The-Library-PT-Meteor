"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //one category belongs to many books(belongsToMany)
      category.belongsToMany(models.book, {
        as: "books",
        through: {
          model: "categorybook",
          as: "bridge",
        },
        foreignKey: "categoryId",
      });
    }
  }
  category.init(
    {
      name: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};
