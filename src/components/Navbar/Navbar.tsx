"use client";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";
import {
  NavbarContainer,
  NavbarDropdownContainer,
  NavbarDropdownList,
  NavbarDropdownListItem,
  NavbarDropdownToggle,
  NavbarNavigationIcon,
  NavbarUserContainer,
  NavbarUserContainerAvatar,
} from "./styled-navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDropdown } from "../DropdownList/hooks/useDropdown";

type NavbarProps = {
  toggleSidebar: VoidFunction;
};

export const Navbar = (props: NavbarProps) => {
  const { toggleSidebar } = props;

  const { user, loading, clearUser } = useLocalStorageUser();
  const router = useRouter();

  const { dropdownContainerRef, showDropdown, toggleDropdown } = useDropdown();

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
        <NavbarDropdownContainer ref={dropdownContainerRef}>
          <NavbarDropdownToggle onClick={toggleDropdown}>
            <span className="material-symbols-outlined">more_horiz</span>
          </NavbarDropdownToggle>
          <NavbarDropdownList $showDropdown={showDropdown}>
            <NavbarDropdownListItem onClick={clearUser}>
              <span className="material-symbols-outlined">logout</span>{" "}
              <p>Logout</p>
            </NavbarDropdownListItem>
          </NavbarDropdownList>
        </NavbarDropdownContainer>
      </NavbarUserContainer>
    </NavbarContainer>
  );
};
