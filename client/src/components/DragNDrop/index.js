// src/App.js

///Dependences, I added ( yarn add react-beautiful-dnd and yarn uuid v4). /// https://github.com/uuidjs/uuid#deep-requires-now-deprecated explains reason for lines 8 and 9.
//DragDropCentext are all our columns
// Droppable are the colummns
// Draggable are items to drag

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import API from "../../utils/API";
import { useAuth0 } from "../../utils/auth0Provider";
import DueDate from "../../common/DueDate/index";
import PopButt from "./popup";
import "./style.css";
import "../../common/Navbar/style.css";
// import uuid from "uuid/v4";
// const { v4: uuidv4 } = require("uuid");
// uuidv4();

function DragNDrop() {
  /// using UUID, how to integrate that to backend(Mongodb). These are the projects(items) we are going to drag around.

  //// ajax call to retrieve data from seed (Task)
  const { getTokenSilently } = useAuth0();
  const [tasks, setTasks] = useState([]);
  const {id} = useParams();
  // const [formObject, setFormObject] = useState({})
  useEffect(() => {
    componentDidMount();
  }, []);

  function componentDidMount(){
    loadTasks();
  }

  async function loadTasks() {
    const token = await getTokenSilently();
    API.getTasks(token)
      .then((res) => {
        setTasks(res.data.filter((data)=> data.project === id));
        setColumns({
          ["to-do"]: {
            ...columns["to-do"],
            tasks: res.data.filter((tasks) => tasks.status === "to-do" && tasks.project === id),
          },
          ["in-progress"]: {
            ...columns["in-progress"],
            tasks: res.data.filter((tasks) => tasks.status === "in-progress" && tasks.project === id),
          },
          ["done"]: {
            ...columns["done"],
            tasks: res.data.filter((tasks) => tasks.status === "done" && tasks.project && tasks.project === id),
          },
        });
      })
      .catch((err) => console.log(err));
  }

// }
    // async function deleteTask(id){
    //   const token = await getTokenSilently();
    //   API.deleteTasks(id, token)
    //   .then(res => loadTasks())
    //   .catch(err => console.log(err));
    //   }
  // console.log(tasks);
  // TO DO: STRUCTURE THE RES(data), making a const and function for ItemsFrom back end and columesfrom back end.

  // /// Creating Columns for tasks columns
  // // moving the tasks seed to columns
  const columnsFromBackend = {
    ["to-do"]: {
      name: "To Do",

      tasks: [],
    },
    ["in-progress"]: {
      name: "In Progress",

      tasks: [],
    },
    ["done"]: {
      name: "Done",

      tasks: [],
    },
  };
  // Drag functions
  async function onDragEnd(result, columns, setColumns) {
    const token = await getTokenSilently();
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      const selectedTask = sourceColumn.tasks[source.index]._id;
      destItems.splice(destination.index, 0, removed);
      API.updateTask(selectedTask, destination.droppableId, token).then(
        (res) => {
          // console.log(res.data);
          // setTasks(res.data.filter((data)=> data.project === id));
          // setTasks(res.data);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              tasks: sourceItems,
            },
            [destination.droppableId]: {
              ...destColumn,
              tasks: destItems,
            },
          });
        }
      );
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.tasks];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems,
        },
      });
    }
  }

  // The DragDropContext (Container) has children (Droppable (OnDrag) and Draggable). Its the wrapper

  const [columns, setColumns] = useState(columnsFromBackend);

  // console.log("Columns", columns);

  return (
    <div id="kanban">
      <div className="row" style={{marginBottom: "1%"}}>
      <div id="taskBtn">
        <Link to={"/tasks/projects/" + id }><button className="chatButt">Add Task</button></Link>
      </div>
      <div id="chatBtn">
        <PopButt />
    </div>
   
      <Link to={"/profile"}><button className="chatButt">Profile</button></Link>
    </div>
    <DueDate />
    
    <div id="dragNDrop" style={{ display: "flex", justifyContent: "center", height: "100%", marginLeft: "4.5%"}}>

      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div key={id}
              style={{
                key: "index",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "6%",
                // background: "lightgray"
                background: "lightsteelblue"
                // border: "2px solid black"
              }}
            >
              <h2 style={{textAlign: "center", padding: "3%", background: "midnightblue", color:"gainsboro", fontFamily: "'PT Sans Narrow', sans-serif", fontSize: "40px"}}>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <div id="columns"
                        {...provided.droppablePorps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "gainsboro"
                            : "none",
                          padding: 10,
                          width: 350,
                          minHeight: 500,
                        }}
                      >
                        {column.tasks.map((task, index) => {
                          // console.log(task);
                          return (
                            <Draggable
                              key={task.title}
                              draggableId={task._id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "steelblue"
                                        : "midnightblue",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <h5><strong>{task.title}:</strong></h5>
                                    <div>
                                      {task.description}
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>

    </div>

  </div>
  );
}

export default DragNDrop;
