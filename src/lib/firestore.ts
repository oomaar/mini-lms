// lib/firestore.ts (client helpers)
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Course } from "@/types/Course";

export async function fetchCourses(): Promise<Course[]> {
  const snap = await getDocs(collection(db, "courses"));
  return snap.docs.map((d) => {
    const data = d.data();

    return {
      id: d.id,
      title: data.title as string,
      description: data.description as string,
      lessonIds: data.lessonIds as string[],
    };
  });
}
