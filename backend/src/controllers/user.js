import User from "../../models/users.js";
import Book from "../../models/books.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Book,
        as: "books",
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
