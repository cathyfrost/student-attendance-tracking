import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createPool({
  host: "localhost",
  user: "root",
  database: "student",
  password: "ht631414",
  port: '3306'
});

export const db = drizzle(connection);