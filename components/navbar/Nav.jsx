import Link from "next/link";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav-container">
        <li>
          <Link href="/">
            <img
              src="/lumos.png"
              alt="lumos"
              loading="lazy"
              className="lumos size-12"
            />
          </Link>
        </li>
        <li>
          <Link href="/">Main page</Link>
        </li>
        <li>
          <Link href="../eventspage">Event</Link>
        </li>
        <li>
          <Link href="/clubs">Club</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/minichat">Shine Ai</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
