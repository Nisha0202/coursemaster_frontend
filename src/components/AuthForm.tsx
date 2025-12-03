"use client";

import { useState } from "react";

interface Props {
  type: "login" | "signup";
}

export default function AuthForm({ type }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isSignup = type === "signup";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body: any = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (isSignup) body.name = formData.get("name");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/${isSignup ? "/auth/register" : "/auth/login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");

      localStorage.setItem("token", data.data.token);
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="flex items-center justify-center min-h-[90vh] bg-gray-100 px-4 py-6">
    <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200">
      <h2 className="sm:text-2xl text-xl font-semibold mb-6 text-center text-gray-800">
        {isSignup ? "Create Account" : "Login"}
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {isSignup && (
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              name="name"
              required
              className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none"
            />
          </div>
        )}

        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition"
        >
          {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p className="text-gray-700 text-sm mt-5 text-center">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <a href="/auth/login" className="underline font-medium text-gray-900">
              Login
            </a>
          </>
        ) : (
          <>
            No account?{" "}
            <a href="/auth/signup" className="underline font-medium text-gray-900">
              Sign Up
            </a>
          </>
        )}
      </p>
    </div>
  </div>
);

}
