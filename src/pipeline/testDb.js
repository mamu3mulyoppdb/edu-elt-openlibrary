import pool from "../config/db.js";

const res = await pool.query("SELECT NOW()");
console.log(res.rows[0]);
