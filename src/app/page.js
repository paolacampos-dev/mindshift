//TODO: render a home page with user navigation or intro to the app
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>MindShift</h1>
        <p>"A social platform for growth and reflective learning"</p>
      </header> 
      <nav>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Get Started</Link>
      </nav>
    </>
  );
}