import { db } from "@/utilities/db.js";

export default async function BooksPage() {
  const result = await db.query(`SELECT * FROM books`);
  const books = result.rows;
  return (
    <div>
      <h1>Books</h1>
      <div className="books-container">
        {books.map((book) => {
          return (
            <p key={book.id}>
              {book.title}, {book.author}, {book.year}
            </p>
          );
        })}
      </div>
    </div>
  );
}
