import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="New task details"
        onChange={(e) => setText(e.target.value)}

      />
      <select
      name = "category"
      value ={category}
      onChange={(e) => setCategory(e.target.value)}>
        {categories
          .filter((c) => c !== "All")
          .map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}
      
export default NewTaskForm;
