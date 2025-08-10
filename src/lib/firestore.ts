// lib/firestore.ts (client helpers)
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { Course } from "@/types/Course";
import { Lesson } from "@/types/Lesson";

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

export async function fetchLessonsByIds(
  lessonIds: string[]
): Promise<Lesson[]> {
  const lessons: Lesson[] = [];

  for (const id of lessonIds) {
    const ref = doc(db, "lessons", id);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data() as Lesson;
      lessons.push({
        ...data,
      });
    }
  }

  return lessons;
}

export async function fetchLessonById(id: string): Promise<Lesson> {
  const ref = doc(db, "lessons", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error(`Lesson with id ${id} not found`);
  }

  const data = snap.data();

  return {
    id: snap.id,
    title: data.title as string,
    content: data.content as string,
    courseId: data.courseId as string,
  };
}

export async function updateCourseById(
  id: string,
  updatedData: Partial<Omit<Course, "id">>
): Promise<void> {
  const ref = doc(db, "courses", id);
  await updateDoc(ref, updatedData);
}
