import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { authenticated, loading } = useAuth();

  // Wait until authentication check completes
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0f0f0f]">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full border-2 border-amber-400/20 border-t-amber-400 animate-spin" />
          <p className="mt-4 text-xs font-mono uppercase tracking-widest text-amber-400/70">
            Verifying Access...
          </p>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}