// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST, // or the host of your docker container
  database: process.env.POSTGRES_DB, // or your database name
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT, // default PostgreSQL port
});

export default pool;

