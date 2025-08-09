"use client";

import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";

export default function CoursesPage() {
  const { clearUser } = useLocalStorageUser();

  return (
    <div>
      <h1>Courses</h1>
      <button className="button" style={{ width: "300px" }} onClick={clearUser}>
        Logout
      </button>
    </div>
  );
}
