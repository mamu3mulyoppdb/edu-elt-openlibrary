const url = "https://openlibrary.org/search.json?q=education&limit=5";

async function fetchBooks() {
  const res = await fetch(url);
  const data = await res.json();
  return data.docs;
}

export default fetchBooks;
