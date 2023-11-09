// Redux action creators for adding, deleting, editing and marking as complete
export const addTodo = (content) => ({
  type: "ADD_TODO",
  payload: content,
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});
export const editTodo = (id, content) => ({
  type: "EDIT_TODO",
  payload: { id, content },
});
export const toggleCompleted = (id) => ({
  type: "TOGGLE_COMPLETED",
  payload: id,
});
