import { type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children?: ReactNode;
  handleCourseGoalDelete: (id: number) => void;
  id: number;
}

export default function CourseGoal({
  title,
  handleCourseGoalDelete,
  children,
  id,
}: CourseGoalProps) {
  return (
    <article key={id}>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => handleCourseGoalDelete(id)}>delete</button>
    </article>
  );
}
