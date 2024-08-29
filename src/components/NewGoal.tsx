import { useState, type FormEvent } from "react";
import { ICourseGoal } from "../App";

interface NewGoalType {
  addGoalHandler: (newGoal: ICourseGoal) => void;
}

function NewGoalFormComponent({ addGoalHandler }: NewGoalType) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(title);
    console.log(description);
    const newGoal = {
      title,
      description,
      id: Math.random(),
    };
    addGoalHandler(newGoal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="desc">Description:</label>
        <input
          type="text"
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoalFormComponent;
