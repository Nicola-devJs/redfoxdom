import { Pool } from "pg";

const DEFAULT_PORT = 5432;

const pool = new Pool({
  //   password: process.env.DATABASE_PASSWORD || undefined,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : DEFAULT_PORT,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
});

export const query = async (
  textQuery: string,
  values?: (string | number)[],
) => {
  const client = await pool.connect();

  try {
    const result = await client.query(textQuery, values);
    return result;
  } finally {
    client.release();
  }
};
