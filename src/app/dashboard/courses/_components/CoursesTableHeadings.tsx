import { TH } from "@/components/Table/styled-table";

export function CoursesTableHeadings() {
  const headings = ["Title", "Description", "Lessons Count", "Actions"];

  return (
    <>
      {headings.map((heading, index) => (
        <TH key={index} $actions={heading === "Actions" && true}>
          <div>{heading}</div>
        </TH>
      ))}
    </>
  );
}
