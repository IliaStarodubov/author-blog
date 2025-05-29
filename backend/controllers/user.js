import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { generate } from "../helpers/token.js";
import { ROLES } from "../constants/roles.js";

// register
export const register = async (login, password) => {
  if (!password) {
    throw new Error("Passwords is empty");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({ login, password: passwordHash });
  const token = generate({ id: user.id });

  return { user, token };
};

// login
export const login = async (login, password) => {
  const user = await User.findOne({ login });
  if (!user) {
    throw new Error("Login not found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Wrong passwords");
  }

  const token = generate({ id: user.id });

  return { user, token };
};

export const getUsers = () => {
  return User.find();
};

export const getRoles = () => {
  return [
    { id: ROLES.ADMIN, name: "Admin" },
    { id: ROLES.MODERATOR, name: "Moderator" },
    { id: ROLES.USER, name: "User" },
  ];
};

// delete user
export const deleteUser = (id) => {
  return User.deleteOne({ _id: id });
};

// edit user(role)
export const updateUser = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { returnDocument: "after" });
};
