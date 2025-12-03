"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCourse() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", category: "", level: "", description: "" });
 const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const submit = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${baseUrl}/api/courses/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/dashboard/courses");
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Create Course</h1>
      <div className="space-y-3">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            className="w-full p-3 border rounded bg-white"
            placeholder={key}
            value={(form as any)[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}
        <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">
          Create
        </button>
      </div>
    </div>
  );
}
