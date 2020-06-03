import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import API from "../../utils/API";
import { useAuth0 } from "../../utils/auth0Provider";
import DueDate from "../../common/DueDate/index";
import PopButt from "./popup";
import "./style.css";
import "../../common/Navbar/style.css";

function DragNDrop() {
  const { getTokenSilently } = useAuth0();
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    componentDidMount();
  }, []);

  async function componentDidMount() {
    const token = await getTokenSilently();
    API.getProject(id, token).then((res) => {
      console.log(res);
      console.log(res.data);
      setProjects(res.data.filter((data) => data._id === id));
    })
      .then(res => loadTasks())
      .catch(err => console.log(err));
  }

  async function loadTasks() {
    const token = await getTokenSilently();
    API.getTasks(token)
      .then((res) => {
        setTasks(res.data.filter((data) => data.project === id));
        setColumns({
          ["to-do"]: {
            ...columns["to-do"],
            tasks: res.data.filter(
              (tasks) => tasks.status === "to-do" && tasks.project === id
            ),
          },
          ["in-progress"]: {
            ...columns["in-progress"],
            tasks: res.data.filter(
              (tasks) => tasks.status === "in-progress" && tasks.project === id
            ),
          },
          ["done"]: {
            ...columns["done"],
            tasks: res.data.filter(
              (tasks) =>
                tasks.status === "done" && tasks.project && tasks.project === id
            ),
          },
        });
      })
      .catch((err) => console.log(err));
  }

  // async function deleteTask(id){
  //   const token = await getTokenSilently();
  //   API.deleteTasks(id, token)
  //   .then(res => loadTasks())
  //   .catch(err => console.log(err));
  //   }

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

  return (
    <div id="kanban">
      <div className="row" style={{ marginBottom: "1%" }}>
        <div id="taskBtn">
          <Link to={"/tasks/projects/" + id}>
            <button className="chatButt">Add Task</button>
          </Link>
        </div>
        <div id="chatBtn">
          <PopButt />
        </div>

        <Link to={"/profile"}>
          <button className="chatButt">Profile</button>
        </Link>
      </div>
      {projects.map((project) => (
        <h5 key={project.code} style={{ textAlign: "left", color: "midnightblue" }}>
          <strong>Project Code: </strong>{project.code}
        </h5>
      ))}
      <DueDate />
      <div
        id="dragNDrop"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          marginLeft: "4.5%",
        }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, column]) => {
            return (
              <div
                key={id}
                style={{
                  key: "index",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginRight: "6%",
                  background: "lightsteelblue",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    padding: "3%",
                    background: "steelblue",
                    color: "gainsboro",
                    fontFamily: "'PT Sans Narrow', sans-serif",
                    fontSize: "40px",
                  }}
                >
                  {column.name}
                </h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          id="columns"
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
                                      <h5>
                                        <strong>{task.title}:</strong>
                                      </h5>
                                      <div>{task.description}</div>
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
