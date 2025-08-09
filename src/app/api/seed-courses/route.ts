import { db } from "@/lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import courses from "@/data/courses.json";

export async function POST() {
  try {
    const coursesCollection = collection(db, "courses");

    for (const course of courses) {
      const courseRef = doc(coursesCollection, course.id);
      await setDoc(courseRef, course);
    }

    return new Response(
      JSON.stringify({ message: "Courses seeded successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error seeding courses:", error);
    return new Response(JSON.stringify({ error: "Failed to seed courses" }), {
      status: 500,
    });
  }
}
