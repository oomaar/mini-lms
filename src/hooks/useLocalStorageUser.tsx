import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

type StoredUser = {
  username: string;
  userRole: string;
};

const STORAGE_KEY = "mini_lms_user";

export function useLocalStorageUser() {
  const [user, setUser] = useState<StoredUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const saveUser = useCallback((newUser: StoredUser) => {
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  }, []);

  const clearUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    router.replace("/login");
  }, [router]);

  return { user, saveUser, clearUser, loading };
}
