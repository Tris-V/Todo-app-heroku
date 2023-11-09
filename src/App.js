import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleCompleted,
} from "./actions/todoActions";
import TodoItem from "./TodoItem";
import "./App.css";

// State for new todo item input field
function App({ data, addTodo, deleteTodo, editTodo, toggleCompleted }) {
  const [newTodo, setNewTodo] = useState("");
  // Handler to add new todo item to the todo list
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {/* Render each todo item using the TodoItem component */}
        {Object.keys(data).map((id) => (
          <TodoItem
            key={id}
            id={id}
            content={data[id].content}
            completed={data[id].completed}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

// Connect the component to Redux store and action creators
export default connect(mapStateToProps, {
  addTodo,
  deleteTodo,
  editTodo,
  toggleCompleted,
})(App);

/* https://www.youtube.com/watch?v=q2zpBgve8jg&t=298s
   https://legacy.reactjs.org/docs/hooks-state.html 
   https://legacy.reactjs.org/docs/hooks-effect.html
   https://react-redux.js.org/api/hooks#useselector
   https://react-redux.js.org/api/hooks#usedispatch
   https://legacy.reactjs.org/docs/components-and-props.html
   https://react-redux.js.org/using-react-redux/connect-mapstate
   https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions
   https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#reducers */
