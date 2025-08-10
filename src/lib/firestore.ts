// lib/firestore.ts (client helpers)
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
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

export async function fetchCourseById(id: string): Promise<Course> {
  const ref = doc(db, "courses", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error(`Course with id ${id} not found`);
  }

  return {
    id: snap.id,
    title: snap.data().title as string,
    description: snap.data().description as string,
    lessonIds: snap.data().lessonIds as string[],
  };
}
