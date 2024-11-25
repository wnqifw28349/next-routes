import { db } from "@/utilities/db.js";
import Link from "next/link";

export default async function PostsPage() {
  const result = await db.query(
    `SELECT 
      posts.id, 
      posts.title,
      posts.content
    FROM posts
    ORDER BY posts.id DESC`
  );
  const posts = result.rows;

  return (
    <div>
      <h1>Posts</h1>

      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h2>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
