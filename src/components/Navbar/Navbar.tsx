"use client";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";
import {
  NavbarContainer,
  NavbarNavigationIcon,
  NavbarUserContainer,
  NavbarUserContainerAvatar,
} from "./styled-navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ActionsList } from "../ActionsList/ActionsList";
import { ActionsListListItem } from "../ActionsList/styled-actions-list";
import Link from "next/link";

type NavbarProps = {
  toggleSidebar: VoidFunction;
};

export const Navbar = (props: NavbarProps) => {
  const { toggleSidebar } = props;

  const { user, loading, clearUser } = useLocalStorageUser();
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
    <NavbarContainer>
      <NavbarNavigationIcon onClick={toggleSidebar}>
        <span className="material-symbols-outlined">menu</span>
      </NavbarNavigationIcon>
      <NavbarUserContainer>
        <NavbarUserContainerAvatar>
          <span className="material-symbols-outlined">person</span>
        </NavbarUserContainerAvatar>
        <div>
          <p>{user?.username}</p>
          <p>{user?.userRole}</p>
        </div>
        <ActionsList>
          <ActionsListListItem onClick={clearUser}>
            <span className="material-symbols-outlined">logout</span>{" "}
            <p>Logout</p>
          </ActionsListListItem>
          <ActionsListListItem>
            <Link href={`/dashboard/profile`}>
              <span className="material-symbols-outlined">person</span>{" "}
              <p>Profile</p>
            </Link>
          </ActionsListListItem>
        </ActionsList>
      </NavbarUserContainer>
    </NavbarContainer>
  );
};
