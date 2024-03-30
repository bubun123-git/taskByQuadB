
const initialState = {
    tasks: [], // Start with no tasks
  };
  
  // Reducer function to handle actions and update the state
  export const taskReducer = (state = initialState, action) => {
    // Decide what to do based on the type of action
    switch (action.type) {
      
      case "ADD_TASK":
        return {
          ...state, 
          tasks: [...state.tasks, action.payload], // Add the new task
        };
  
      // Delete a task 
      case "DELETE_TASK":
        return {
          ...state, 
          tasks: state.tasks.filter((_, index) => index !== action.payload), 
        };
  
      
      default:
        return state;
    }
  };
  
  
  