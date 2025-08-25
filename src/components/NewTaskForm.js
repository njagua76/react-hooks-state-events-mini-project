import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0] || "Code");

  function handleSubmit(e) {
    e.preventDefault();

    // prevent adding empty tasks
    if (text.trim() === "") return;

    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0] || "Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
