import { NavLink } from "react-router";
import routes from "../routes";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <h1>The Roast Albums</h1>
      <section className="routes">
        {routes.map(({ path, label, order }) => (
          <NavLink key={order} to={path}>
            {label}
          </NavLink>
        ))}
      </section>
    </header>
  );
}

export default Header;
