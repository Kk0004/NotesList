import { useState } from "react";
import { api } from "../services/jsonServer";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    await api.post("/users", { username, password });
    alert("User registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}
