import { db } from "@/utilities/db.js";

export default async function SinglePostPage({ params }) {
  const id = (await params).id;
  const result = await db.query(`SELECT * from posts where id=${id}`);
  const post = result.rows[0];
  //include the post category and tags...
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
