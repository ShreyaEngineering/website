import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginApi } from "../../../api/authApi";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { checkAuth } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setError("");

      await loginApi(email, password);

      await checkAuth();

      navigate("/invoice");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
  >
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-white">
        Admin Login
      </h1>

     
    </div>

    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-orange-500"
        />
      </div>

      {error && (
        <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-orange-500/30"
      >
        Login
      </button>
    </div>
  </form>
</div>
  );
}