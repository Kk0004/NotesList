import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/jsonServer";
import "../styles/forms.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await api.get(`/users?username=${username}&password=${password}`);

    if (res.data.length === 0) {
      alert("Invalid username or password");
      return;
    }

    login(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
