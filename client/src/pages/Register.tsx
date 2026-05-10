import { useState } from "react";
import API from "../Services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch {
      alert("Register failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Register</h2>

      <input className="border p-2 m-2" placeholder="Name"
        onChange={(e) => setName(e.target.value)} />

      <input className="border p-2 m-2" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />

      <input className="border p-2 m-2" type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button className="bg-black text-white p-2" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}