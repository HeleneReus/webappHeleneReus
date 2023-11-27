import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/calculator">Verdoppler</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <li>
            <Link tp="/helloworld">Hello World</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  );
}
