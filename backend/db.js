import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Client } = pg;
const connectToDataBase = async () => {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  });
  try {
    await client.connect();
    console.log("Connected to the PostgreSQL database");
  } catch (err) {
    console.error("Connection error", err.stack);
    throw err;
  }

  return client;
};

export default connectToDataBase;
