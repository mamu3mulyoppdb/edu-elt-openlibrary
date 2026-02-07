import pool from "../config/db.js";

async function loadRawBooks(books) {
  for (const book of books) {
    await pool.query(
      `INSERT INTO raw.raw_books (source, payload)
       VALUES ($1, $2)`,
      ["openlibrary", book],
    );
  }
}

export default loadRawBooks;
