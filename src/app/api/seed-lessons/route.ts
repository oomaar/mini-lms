import { db } from "@/lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import lessons from "@/data/lessons.json";

export async function POST() {
  try {
    const lessonsCollection = collection(db, "lessons");

    for (const lesson of lessons) {
      const courseRef = doc(lessonsCollection, lesson.id);
      await setDoc(courseRef, lesson);
    }

    return new Response(
      JSON.stringify({ message: "Lessons seeded successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error seeding lessons:", error);
    return new Response(JSON.stringify({ error: "Failed to seed Lessons" }), {
      status: 500,
    });
  }
}
