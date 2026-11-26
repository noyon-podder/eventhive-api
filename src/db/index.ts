import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
  connectionString: config.db_url,
});

const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,

        role VARCHAR(20) NOT NULL DEFAULT 'attendee'
            CHECK (role IN ('attendee', 'organizer')),

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("💀💀 Connection to database💀");
  } catch (error: any) {
    console.error("Error connecting to the database:", error);
  }
};

export default initDB;
