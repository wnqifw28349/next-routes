import { db } from "@/utilities/db.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SinglePostPage({ params }) {
  const id = (await params).id;

  const result = await db.query(
    `SELECT 
      posts.id, 
      posts.title, 
      posts.content
    FROM posts
    WHERE posts.id=$1`,
    [id]
  );
  const post = result.rows[0];

  const data = await db.query(
    `SELECT
      comments.post_id,
      ARRAY_AGG(comments.content) AS contents
    FROM comments
    GROUP BY comments.post_id
    HAVING comments.post_id=$1`,
    [id]
  );
  const commentsData =
    data.rows.length > 0 ? data.rows[0] : { contents: ["No Comments Yet"] };

  async function handleAddComment(formData) {
    "use server";

    const comment = formData.get("comment");

    await db.query(`INSERT INTO comments (post_id, content) VALUES ($1, $2)`, [
      id,
      comment,
    ]);

    revalidatePath(`/posts/${id}`); //https://nextjs.org/docs/app/api-reference/functions/revalidatePath
  }

  async function handleDeletePost() {
    "use server";

    await db.query(`DELETE FROM comments WHERE comments.post_id=$1`, [id]);
    await db.query(`DELETE FROM posts WHERE id=$1`, [id]);

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleDeletePost}>Delete Post</button>

      <h3>Comments</h3>

      <ul>
        {commentsData.contents.map((content) => {
          return <p key={content}>{content}</p>;
        })}
      </ul>

      <form action={handleAddComment}>
        <input name="comment" placeholder="Add a comment..." />
        <button>Add</button>
      </form>
    </div>
  );
}
