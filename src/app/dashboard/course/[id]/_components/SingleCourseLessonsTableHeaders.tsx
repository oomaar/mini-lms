import { TH } from "@/components/Table/styled-table";

export function SingleCourseLessonsTableHeadings() {
  const headings = ["Title", "Content", "Actions"];

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
