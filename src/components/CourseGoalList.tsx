import React from "react";
import CourseGoal from "./CourseGoal";

function CourseGoalList({
  goals,
  handleDeleteGoal,
}: {
  goals: { title: string; description: string; id: number }[];
  handleDeleteGoal: (id: number) => void;
}) {
  function handleCourseGoalDelete1(id: number) {
    console.log("handleCourseGoalDelete", id);
    handleDeleteGoal(id);
  }
  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              handleCourseGoalDelete={handleCourseGoalDelete1}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;
