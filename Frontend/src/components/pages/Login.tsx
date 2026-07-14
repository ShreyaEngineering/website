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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await loginApi(email, password);
      await checkAuth();
      navigate("/invoice");
    } catch {
      setError("Invalid credentials. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0C] px-4 py-10 sm:px-6">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="border border-[#232326] bg-[#141416]">
          {/* Hazard stripe — same motif as the navbar/footer */}
          <div
            className="h-[3px] w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #F4B400 0px, #F4B400 12px, #141416 12px, #141416 24px)",
            }}
          />

          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
              <span className="flex h-11 w-11 items-center justify-center border-2 border-[#F4B400] font-mono text-sm font-bold text-[#F4B400]">
                SE
              </span>

              <h1 className="mt-4 font-mono text-xl font-semibold uppercase tracking-[0.15em] text-[#EDEDED] sm:text-2xl">
                Admin access
              </h1>
              <p className="mt-1.5 text-xs text-[#8A8A8E] sm:text-sm">
                Authorized personnel only
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-[#9A9A9E]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#3A3A3D] bg-[#0B0B0C] px-3.5 py-2.5 text-sm text-[#EDEDED] outline-none transition-colors placeholder:text-[#5A5A5E] focus:border-[#F4B400] sm:px-4 sm:py-3 sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-[#9A9A9E]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-[#3A3A3D] bg-[#0B0B0C] px-3.5 py-2.5 text-sm text-[#EDEDED] outline-none transition-colors placeholder:text-[#5A5A5E] focus:border-[#F4B400] sm:px-4 sm:py-3 sm:text-base"
                />
              </div>

              {error && (
                <p className="border border-[#D9483A]/40 bg-[#D9483A]/10 px-3 py-2 text-xs text-[#E8695D] sm:text-sm">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F4B400] py-2.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#0B0B0C] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:py-3 sm:text-sm"
              >
                {loading ? "Verifying…" : "Log in"}
              </button>
            </div>
          </form>
        </div>

        <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-[#5A5A5E]">
          Shreya Engineering Works
        </p>
      </div>
    </div>
  );
}