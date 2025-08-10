"use client";
import { Loading } from "@/components/Loading/Loading";
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";

export default function ProfilePage() {
  const { user, loading } = useLocalStorageUser();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <ScreenHeader title={user?.username || ""} />
      <ScreenHeader title={user?.userRole || ""} />
    </div>
  );
}
