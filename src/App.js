import React, { useContext } from "react";
import Column from "./components/Column";
import DrgDrpContext from "./provider/DragDropProvider";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const { state, onDragEnd } = useContext(DrgDrpContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="section bg-full">
        <div className="container bg-blue">
          <div className="columns is-multiline is-mobile">
            {state.columnsOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              const isEditing = column.isEditing;
              const task = column.tasksOrder.map(
                (taskId) => state.tasks[taskId]
              );
              return (
                <Column
                  key={column.id}
                  tasks={task}
                  index={index}
                  column={column}
                  isEditing={isEditing}
                  editable
                />
              );
            })}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
