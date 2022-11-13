"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class bookcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bookcategory.init(
    {
      bookId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bookcategory",
    }
  );
  return bookcategory;
};
