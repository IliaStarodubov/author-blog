import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/secret.js";

export const generate = (data) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: "15d" });
};

export const verify = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
