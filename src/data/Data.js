const Data = {
    tasks: {
      "task-1": { id: "task-1", content: "task 1" },
      "task-2": { id: "task-2", content: "task 2" },
      "task-3": { id: "task-3", content: "task 3" },
      "task-4": { id: "task-4", content: "task-4" },
      "task-5": { id: "task-5", content: "task-5" },
      
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "To Do",
        tasksOrder: ["task-1", "task-2", "task-3"],
        isEditing: false,
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        tasksOrder: ["task-4"],
        isEditing: false,
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        tasksOrder: ["task-5"],
        isEditing: false,
      },
    },
    columnsOrder: ["column-1", "column-2", "column-3"],
  };
  
  export default Data;
  