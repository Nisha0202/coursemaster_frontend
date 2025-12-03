"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useAuth } from "../hooks/usAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { role, token, loading } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-gray-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <Link href="/" className="font-semibold text-gray-900">
          CourseMaster
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/courses" className="text-gray-700 hover:text-gray-900">
            Courses
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>

          {!loading && token ? (
            <>
              {role === "admin" && (
                <Link
                  href="/admin/dashboard"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Admin Dashboard
                </Link>
              )}

              {role === "student" && (
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50 pb-4">
          <div className="flex flex-col px-6 space-y-4 mt-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/courses" onClick={() => setOpen(false)}>Courses</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>

            {!loading && token ? (
              <>
                {role === "admin" && (
                  <Link href="/admin/dashboard" onClick={() => setOpen(false)}>
                    Admin Dashboard
                  </Link>
                )}
                {role === "student" && (
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={() => { handleLogout(); setOpen(false); }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center text-sm hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="w-full px-4 py-2 bg-gray-900 text-white text-center rounded-lg text-sm hover:bg-gray-800"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
