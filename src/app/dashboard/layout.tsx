"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { PropsWithChildren, ReactNode } from "react";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";

type DashboardLayoutProps = PropsWithChildren<{
  children: ReactNode;
}>;

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  const { user, loading } = useLocalStorageUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user === null) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <aside>
        {/* nav (Courses, Lessons, Logout) */}
        <div>
          <p>{user?.username}</p>
          <p>{user?.userRole}</p>
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
