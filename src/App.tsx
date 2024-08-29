import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export default interface ICourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<ICourseGoal[]>([]);

  function handleDeleteGoal(id: number) {
    console.log("handleDeleteGoal", id);
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  function addGoalHandler(newGoal: ICourseGoal) {
    console.log("addGoalHandler");
    setGoals((prevState) => {
      // const newGoal = {
      //   title: "New Goal",
      //   description: "New Goal Description",
      //   id: Math.random(),
      // };
      return [...prevState, newGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal addGoalHandler={(newGoal) => addGoalHandler(newGoal)} />
      <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
