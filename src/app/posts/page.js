import { db } from "@/utilities/db.js";

export default async function PostsPage() {
  const result = await db.query(`SELECT 
      posts.id, 
      posts.title,
      posts.content,
      categories.name AS category,
      ARRAY_AGG(tags.name) AS tags
    FROM posts
    JOIN categories ON posts.category_id = categories.id
    JOIN posts_tags ON posts.id = posts_tags.post_id
    JOIN tags ON posts_tags.tag_id = tags.id
    GROUP BY posts.id, categories.id;`);
  const posts = result.rows;

  return (
    <div>
      <h1>Posts</h1>

      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>

              <h3>Category</h3>
              <p>{post.category}</p>

              <h3>Tags</h3>
              <ul>
                {post.tags.map((tag) => {
                  return <li key={tag}>#{tag}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
