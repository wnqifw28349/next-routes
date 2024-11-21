import { db } from "@/utilities/db.js";
import { redirect } from "next/navigation";

export default function AddPostPage() {
  async function handleAddBook(formData) {
    "use server";

    const title = formData.get("title");
    const author = formData.get("author");
    const year = formData.get("year");

    await db.query(
      `INSERT INTO posts (title, author, year) VALUES ($1, $2, $3)`,
      [title, author, year]
    ); //$ANITI$ATION

    redirect("/posts");
  }

  return (
    <div>
      <h1>Add New Post</h1>
      <form action={handleAddBook}>
        <label>Title:</label>
        <input name="title" placeholder="Title" />
        <label>Author:</label>
        <input name="author" placeholder="Author" />
        <label>Year:</label>
        <input name="year" placeholder="Year" />
        <button>Add Book</button>
      </form>
    </div>
  );
}
