// Initial state of the reducer for the todo list as required
const initialTodoState = {
  nextId: 2,
  data: {
    1: {
      content: "Brush teeth",
      completed: false,
    },
  },
};

// Create reducer to manage state of todo list
const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    // Add item
    case "ADD_TODO":
      const newId = state.nextId;
      return {
        ...state,
        nextId: newId + 1,
        data: {
          ...state.data,
          [newId]: {
            content: action.payload,
            completed: false,
          },
        },
      };
    // Delete irem
    case "DELETE_TODO":
      const { [action.payload]: _, ...newData } = state.data;
      return {
        ...state,
        data: newData,
      };
    // Edit item
    case "EDIT_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            content: action.payload.content,
            completed: state.data[action.payload.id].completed,
          },
        },
      };
    // Mark item completed
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            content: state.data[action.payload].content,
            completed: !state.data[action.payload].completed,
          },
        },
      };
    default:
      return state;
  }
};

export default todoReducer;
