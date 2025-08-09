import { UserRole } from "@/types/UserRole";

export type Role = {
  id: number;
  role: UserRole;
};

export const roles: Role[] = [
  {
    id: 1,
    role: "Admin",
  },
  {
    id: 2,
    role: "User",
  },
];
