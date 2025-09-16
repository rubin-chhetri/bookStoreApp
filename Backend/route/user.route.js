import express from "express";
import { signUp, logIn } from "../controller/user.conroller.js";

const route=express.Router();

route.post("/signup",signUp);
route.post("/login",logIn);

export default route