import { config } from "dotenv";

config();

export const dbConstants = {
  host: process.env.DBHOST,
  port: +process.env.DBPORT,
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
}

export const jwtConstants = {
  secret: process.env.SECRET_KEY,
};
