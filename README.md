Requirements I achieved:

- Displayed all posts on the page.
- Created a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
- Created a delete button on posts that allows users to delete the post from the database.
- Created a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
- Allowed users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
- Added a redirect when a user creates a post to redirect them to the posts page.

Requirements not hit:

- Option to sort the posts in ascending/descending order.

The biggest challenge was the app failing when trying to render a page for a post that has zero comments.

I tackled this by using a ternary operator for the SQL query that will conditionally handle
the output of the fetch response for the comments. I asked ChatGPT how to structure the ternary operator for a fetch that responds with a null value. I used the JSON format for the comments array in the JSON response from data.rows as the falsey value, which ensures that there is an array that can be mapped through when trying to render comments.

I used https://dev.to/dmodena/difference-between-join-and-where-clauses-in-sql-41pi to tackle grouping by id for the comments. Since ARRAY_AGG was used to collect the comments content, WHERE clause is replaced with HAVING in order to group them by id.

The next step I would do for this app would be to reorganise the client components such as the comments and posts forms in to the components folder, and then call them in the routes where they are used. I would also add styling to make the page more user-friendly and intuitive to use.
