import { Sequelize } from "sequelize";

const db = new Sequelize("the-library-pt-meteor-dev", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
