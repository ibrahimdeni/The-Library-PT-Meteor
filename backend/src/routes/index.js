import express from "express";
import { Register } from "../controllers/auth.js";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

//AUTH-ROUTES--------------------------------------
router.post("/users", Register);

//USERS-ROUTES-------------------------------------
router.get("/users", getUsers);

export default router;
