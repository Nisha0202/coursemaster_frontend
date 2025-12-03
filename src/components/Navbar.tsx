"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-gray-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-semibold text-gray-900">
          CourseMaster
        </Link>

        {/* Search Bar (Desktop Only) */}
        <div className="hidden md:flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2 w-80">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="ml-2 w-full bg-transparent focus:outline-none text-sm text-gray-700"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/courses" className="text-gray-700 hover:text-gray-900">
            Courses
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>

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
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50 pb-4">
          {/* Mobile Search */}
          <div className="px-4 mt-4">
            <div className="flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="ml-2 w-full bg-transparent focus:outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          <div className="flex flex-col px-6 space-y-4 mt-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/courses"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              Courses
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

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
          </div>
        </div>
      )}
    </nav>
  );
}
