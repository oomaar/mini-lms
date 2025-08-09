"use client";
import styles from "./page.module.css";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input/Input";
import { DropdownList } from "@/components/DropdownList/DropdownList";
import { UserRole } from "@/types/UserRole";
import { Role, roles } from "./roles/roles";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";

type LoginUserState = {
  username: string;
  userRole: UserRole;
  usernameFormError: boolean;
};

export default function LoginPage() {
  const [loginUser, setLoginUser] = useState<LoginUserState>({
    username: "",
    userRole: "User",
    usernameFormError: false,
  });

  const { saveUser, user } = useLocalStorageUser();
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.replace("/dashboard/courses");
    }
  }, [user, router]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!loginUser.username.trim()) {
      setLoginUser({
        ...loginUser,
        usernameFormError: true,
      });

      return;
    }

    saveUser({
      username: loginUser.username,
      userRole: loginUser.userRole,
    });

    router.replace("/dashboard/courses");
  };

  const handleSelectUserRole = (value: UserRole) => {
    setLoginUser({
      ...loginUser,
      userRole: value,
    });
  };

  return (
    <main className={styles.loginMain}>
      <div className={styles.loginFormContainer}>
        <div className={styles.loginFormContainerHeader}>
          <span className="material-symbols-outlined">school</span>
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <Input
            label="Username"
            value={loginUser.username}
            onChange={(e) =>
              setLoginUser({
                ...loginUser,
                usernameFormError: false,
                username: e.target.value,
              })
            }
            width="90%"
            errorState={loginUser.usernameFormError}
          />
          <DropdownList<Role>
            options={roles}
            placeholder={loginUser.userRole}
            getLabel={(role) => role.role}
            onSelect={(role) => handleSelectUserRole(role.role)}
            width="90%"
          />
          <button className="button">Login</button>
        </form>
      </div>
    </main>
  );
}
