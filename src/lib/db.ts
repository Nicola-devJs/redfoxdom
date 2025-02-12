import { Pool } from "pg";

const pool = new Pool({
  password: "x4qKSfMAyi-pnK7",
  user: "postgres.ydonholjrkulddslfwwj",
  port: 6543,
  host: "aws-0-eu-central-1.pooler.supabase.com",
  database: "postgres",
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
