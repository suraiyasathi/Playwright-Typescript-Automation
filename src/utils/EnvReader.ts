import * as dotenv from "dotenv";
dotenv.config();

export const EnvReader = {
  baseUrl: process.env.BASE_URL || "",
  email: process.env.EMAIL || "",
  password: process.env.PASSWORD || ""
};
