import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>NextJS Testbed</h2>
          <nav>
            <Link href="/">Home</Link> | <Link href="/books">Books</Link> |{" "}
            <Link href="/books/add">Add Book</Link> |{" "}
            <Link href="/posts">Posts</Link> | <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
