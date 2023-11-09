import React, { useState } from "react";
import "./App.css";

// State to manage edit mode of the todo item and state to store edited content of the todo item.
const TodoItem = ({
  id,
  content,
  completed,
  deleteTodo,
  editTodo,
  toggleCompleted,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  // Handler to edit a todo item.
  const handleEdit = () => {
    if (editMode) {
      editTodo(id, editedContent);
    }
    setEditMode(!editMode);
  };

  return (
    <li>
      {editMode ? (
        // Input for editing content when in edit mode.
        <input
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        // Display the content with a line through it if its marked completed.
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {content}
        </span>
      )}
      <button onClick={handleEdit}>{editMode ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <button onClick={() => toggleCompleted(id)}>Completed</button>
    </li>
  );
};

export default TodoItem;
