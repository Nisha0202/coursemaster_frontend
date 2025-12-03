"use client";

import { useEffect, useState } from "react";

export type UserRole = "admin" | "student" | null;

interface AuthState {
  token: string | null;
  role: UserRole;
  loading: boolean;
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>({
    token: null,
    role: null,
    loading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth({ token: null, role: null, loading: false });
      return;
    }

    // Optionally, decode JWT if it contains role info
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // decode JWT
      const role = payload.role as UserRole;
      setAuth({ token, role, loading: false });
    } catch (err) {
      console.error("Invalid token:", err);
      setAuth({ token: null, role: null, loading: false });
    }
  }, []);

  return auth;
}
