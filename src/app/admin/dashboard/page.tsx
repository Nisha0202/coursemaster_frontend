
"use client";

import { useEffect, useState } from "react";
import StatsCard from "../../../components/StatsCard";
import Link from "next/link";

export default function Dashboard() {
  const [stats, setStats] = useState({
    courses: 0,
    assignments: 0,
    quizzes: 0,
    enrollments: 0,
  });

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Fetch courses
    fetch(`${baseUrl}/courses`)
      .then(res => res.json())
      .then(data => setStats(prev => ({ ...prev, courses: data.data.courses.length })))
      .catch(err => console.error("Courses fetch error:", err));

    // Fetch assignments
    fetch(`${baseUrl}/assignments`)
      .then(res => res.json())
      .then(data => setStats(prev => ({ ...prev, assignments: data.data.length })))
      .catch(err => console.error("Assignments fetch error:", err));

   
    fetch("/api/quizzes")
      .then(res => res.json())
      .then(data => setStats(prev => ({ ...prev, quizzes: data.data.length })))
      .catch(err => console.error("Quizzes fetch error:", err));
  }, []);


  return (
    <div className="p-6 bg-gray-100 min-h-[90vh]">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Courses" value={stats.courses} />
        <StatsCard title="Assignments" value={stats.assignments} />
        <StatsCard title="Quizzes" value={stats.quizzes} />
        <StatsCard title="Enrollments" value={stats.enrollments} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="admin/dashboard/courses/create" className="p-6 bg-white rounded-xl shadow hover:shadow-md">
          Create Course
        </Link>
        <Link href="admin/dashboard/quizzes/create" className="p-6 bg-white rounded-xl shadow hover:shadow-md">
          Create Quiz
        </Link>
        <Link href="admin/dashboard/assignments/create" className="p-6 bg-white rounded-xl shadow hover:shadow-md">
          Create Assignment
        </Link>
      </div>
    </div>
  );
}
