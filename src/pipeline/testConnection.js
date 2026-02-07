import { pool } from "../../config/db/connection.js";

async function test() {
  const res = await pool.query("SELECT NOW()");
  console.log("DB Connected:", res.rows[0]);
  process.exit();
}

test();
