import { db } from "@/utilities/db.js";
import { redirect } from "next/navigation";

export default function AddPostPage() {
  async function handleAddPost(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");

    await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
      title,
      content,
    ]); //$ANITI$ATION

    redirect("/posts");
  }

  return (
    <div>
      <h1>Add New Post</h1>
      <form action={handleAddPost}>
        <label>Title:</label>
        <input name="title" placeholder="Title" />
        <label>Content:</label>
        <input name="Content" placeholder="Write something..." />
        <button>Add Post</button>
      </form>
    </div>
  );
}
