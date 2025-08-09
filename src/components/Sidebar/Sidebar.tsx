import Link from "next/link";
import {
  SidebarBackdrop,
  SidebarCloseIcon,
  SidebarContainer,
  SidebarContainerHeader,
  SidebarList,
  SidebarListItem,
  SidebarLogo,
} from "./styled-sidebar";

type SidebarProps = {
  showSidebar: boolean;
  toggleSidebar: VoidFunction;
};

export const Sidebar = (props: SidebarProps) => {
  const { showSidebar, toggleSidebar } = props;

  return (
    <>
      <SidebarContainer $showSidebar={showSidebar}>
        <SidebarContainerHeader>
          <SidebarLogo className="material-symbols-outlined">
            school
          </SidebarLogo>
          <SidebarCloseIcon onClick={toggleSidebar}>
            <span className="material-symbols-outlined">close</span>
          </SidebarCloseIcon>
        </SidebarContainerHeader>
        <SidebarList>
          <SidebarListItem>
            <Link href="/dashboard/courses">
              <span className="material-symbols-outlined">book_ribbon</span>
              Courses
            </Link>
          </SidebarListItem>
        </SidebarList>
      </SidebarContainer>
      <SidebarBackdrop $showSidebar={showSidebar} onClick={toggleSidebar} />
    </>
  );
};
