import { Clicker } from "@/components/clicker";
//the client component <Clicker /> is being called within a Server component
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <h3>this {"<h3>"} is in the server component</h3>
      <p>
        {"//"}this is a client rendered component{"//"}
      </p>
      <Clicker />
      <p>
        {"//"}this is a client rendered component{"//"}
      </p>
      <h3>so is this one</h3>
    </div>
  );
}
