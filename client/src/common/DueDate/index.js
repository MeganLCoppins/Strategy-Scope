import "./style.css";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import { useAuth0 } from "../../utils/auth0Provider";
const { v4: uuidv4 } = require("uuid");
uuidv4();

/// using UUID, how to integrate that to backend(Mongodb). These are the projects(items) we are going to drag around.

//// ajax call to retrieve data from seed (Task)
function DueDate() {
  const { getTokenSilently } = useAuth0();
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState([]);
  const {id} = useParams();
 
  useEffect(() => {
    loadTasks();
  }, []);

//  let newTask = [];
//   async function loadTasks() {
//     const token = await getTokenSilently();
//     console.log(id);
//     API.getProjects(token)
//       .then(res => {
//         setProject(project.project = res.data.filter((data)=> data._id === id));
//         setTasks(project.project[0].tasks);
//     })
//       .catch((err) => console.log(err));
// }
async function loadTasks() {
  const token = await getTokenSilently();
  console.log(id);
  API.getTasks(token)
    .then(res => {
      console.log(res.data)
      setTasks(res.data.filter((data)=> data.project === id));
  })
    .catch((err) => console.log(err));
}

  const renderInfo = () => {
    if (tasks.length !== 0) {
      return tasks.map((task) => (
        <li key={task.title}>
          <div>
            <h4>{task.title}</h4>
          </div>{" "}
          <div>Due Date: </div>
          <div>{task.due_date.slice(2, 10)}</div>
        </li>
      ));
    } else {
      return <h1>No Tasks to Display...</h1>;
    }
  };

  return (
      <div id="duedate">
        <ul>

        {renderInfo()}
        </ul>
      </div>
  );
}
export default DueDate;
