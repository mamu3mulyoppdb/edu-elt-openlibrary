import fetchBooks from "../extract/fetchBooks.js";
import loadRawBooks from "../load/loadRawBooks.js";

async function run() {
  try {
    console.log("🚿 Fetching books...");
    const books = await fetchBooks();

    console.log(`📦 Got ${books.length} books`);

    await loadRawBooks(books);

    console.log("✅ Data inserted into RAW layer");
  } catch (err) {
    console.error("❌ Pipeline error:", err);
  }
}

run();
