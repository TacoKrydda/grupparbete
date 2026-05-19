import { NavLink } from "react-router";
import routes from "../routes";
import "./Header.css";

//  Tar emot user och setUser som props 
function Header({ user, setUser }) {
  console.log("Vad innehåller user i Header just nu?", user);

  // Lägg till logout funkt
  function logout() {
    // Ta bort sparad data och nollställ state
    delete localStorage.user;
    setUser(null);
  }

  return (
    <header className="site-header">
      <h1>The Roast Albums</h1>
      
      <section className="routes">
        {routes
          .filter((x) => x.label) // Visar bara rutter som har en label
          .map(({ path, label }) => (
            <NavLink key={path} to={path}>
              {label}
            </NavLink>
          ))}
      </section>

      <div className="auth">
      {user
        ? <>
          Inloggad som <NavLink to="/profile"><b>{user?.user?.username}</b></NavLink>
          &nbsp;&nbsp;
          <button onClick={logout}>Logga ut</button>
        </>
        : <>
          <NavLink to="/login">Logga in</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Registrera dig</NavLink>
        </>
      }
    </div>
      
    </header>
  );
}

export default Header;