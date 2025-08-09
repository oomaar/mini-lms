"use client";
import { useState, type PropsWithChildren, type ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ChildrenMain } from "./styled-layout";
import { Navbar } from "@/components/Navbar/Navbar";

type DashboardLayoutProps = PropsWithChildren<{
  children: ReactNode;
}>;

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <ChildrenMain $showSidebar={showSidebar}>{children}</ChildrenMain>
    </div>
  );
}
