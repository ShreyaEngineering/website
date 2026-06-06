import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}