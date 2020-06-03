import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useAuth0 } from "../../utils/auth0Provider";
import { Link, useParams } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../../components/Form/index";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function AddTask() {
  const { getTokenSilently } = useAuth0();

  //   components initial state
  const [formObject, setFormObject] = useState({});
  const [formDate, setDate] = useState(new Date());
  const { id } = useParams();

  //   update component state when user types in input field
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // handle component state when user selects date from calendar
  function handleDateChange(formDate) {
    setDate(formDate);
  }
  // when form is submitted use API.createTask method to save task data
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.title && formObject.description && formDate) {
      const token = await getTokenSilently();
      API.createTask(
        {
          title: formObject.title,
          description: formObject.description,
          due_date: formDate,
          project: id,
        },
        token
      )
        .then((res) => {
          alert("Task Submitted!");
          //reset the state for the forms after data is passed
          setFormObject({ title: "", description: "" });
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div id="taskCont">
      <Link to={"/projects/" + id}>
        <button className="chatButt">Go Back</button>
      </Link>
      <Link to={"/profile"}>
        <button className="chatButt">Profile</button>
      </Link>
      <div className="row">
        <div className="col">
          <h1>Add a New Task</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Task Title (required)"
              value={formObject.title}
              id="formTitle"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description of Task (required)"
              value={formObject.description}
              id="formText"
            />
            <div className="col-md-6 offset-3 dueDate">
              <h3>Select Due Date </h3>
              <div className="calendar offset-3">
                <Calendar onChange={handleDateChange} value={formDate} />
              </div>
              <div className="offset-5 buttons">
                <FormBtn
                  disabled={!(formObject.title && formObject.description)}
                  onClick={handleFormSubmit}
                >
                  Save Task
                </FormBtn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
