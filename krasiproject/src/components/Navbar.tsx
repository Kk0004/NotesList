import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../styles/forms.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user && <Link to="/">Notes</Link>}

      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={logout}>Logout ({user})</button>
      )}
    </nav>
  );
}
