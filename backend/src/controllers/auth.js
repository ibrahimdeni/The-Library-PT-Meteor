// import Users from "../../models/users
// import user from "../../models/users.js";
import Profile from "../../models/profile.js";
import bcrypt from "bcrypt";
import users from "../../models/users.js";
import QueryTypes from "sequelize";
import Sequelize from "sequelize";
// import jwt from "jsonwebtoken";

//Control-Authentification
export const Register = async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    // const newUser = await Users.create({
    //   username: username,
    //   email: email,
    //   password: hashPassword,
    //   role: "user",
    // });

    const users = await Sequelize.query("SELECT * FROM `users`", {
      type: QueryTypes.SELECT,
    });
    // We didn't need to destructure the result here - the results were returned directly

    await Profile.create({
      fullName: "",
      email: "",
      gender: "",
      phone: "",
      address: "",
      image: "null.jpg",
      userId: newUser.id,
    });

    res.json({ msg: "Register Success" });
  } catch (error) {
    console.log(error);
  }
};
