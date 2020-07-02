import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "../../utils/auth0Provider";
import API from "../../utils/API";
import uuid from "uuid/v4";
const { v4: uuidv4 } = require("uuid");
uuidv4();

function Profile() {
  const { loading, user, getTokenSilently } = useAuth0();
  const [projects, setProjects] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [searchObj, setSearchObj] = useState({});
  const [search, setSearch] = useState("");
  const [sameTitle, setSameTitle] = useState("");

  useEffect(() => {
    componentDidMount();
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  function componentDidMount() {
    loadProjects();
  }

  async function loadProjects() {
    const token = await getTokenSilently();
    API.getProjects(token)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }

  //   update component state when user types in input field
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSearchObj({ ...searchObj, [name]: value });
  }

  // when form is submitted use API.createProject method to save project to db
  async function handleFormSubmit(e) {
    e.preventDefault();
    let projCode = uuidv4().slice(0, 8);
    let projTitle = projects.filter(
      (project) => project.title === formObject.title
    );
    if (projTitle[0]) {
      setSameTitle("Sorry, that title has already been used.");
    } else if (formObject.title) {
      const token = await getTokenSilently();
      API.createProject(
        {
          title: formObject.title,
          code: projCode,
        },
        token
      )
        .then((res) => {
          setFormObject({ title: "" });
          window.location.href = "/projects/" + res.data._id;
        })
        .catch((err) => console.log(err));
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const proj = projects.filter((project) => project.code === searchObj.code);

    if (!proj[0]) {
      console.log("no Match");
      setSearch("Sorry, a project with that code couldn't be found.");
    } else {
      console.log(proj[0]._id);
      window.location.href = "/projects/" + proj[0]._id;
    }
  }

  return (
    <Fragment>
      <div className="container profile">
        <h1>HELLO {user.name.toUpperCase()}</h1>
        <div className="row">
          <div className="col-md-6 createProj">
            <h3>Create New Project</h3>
            <h5>
              A unique code will be created with your project that you and your
              team members will need in order to gain access to your project.
            </h5>
            <h5>Enter a project name below!</h5>
            <h3 style={{ color: "red", marginBottom: "0" }}>{sameTitle}</h3>
            <Form>
              <Form.Group controlId="createProject" id="createProject">
                <Form.Control
                  name="title"
                  value={formObject.title}
                  placeholder="Enter a Project Name"
                  onChange={handleInputChange}
                  style={{
                    marginLeft: "0",
                    marginTop: "3%",
                    border: "2px solid black",
                  }}
                />
                <Button
                  disabled={!formObject.title}
                  type="submit"
                  style={{
                    width: "30%",
                    background: "midnightblue",
                    marginTop: "3%",
                    marginLeft: "1%",
                  }}
                  onClick={handleFormSubmit}
                >
                  Create Project
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6 findProj">
            <h3>Search For Your Project</h3>
            <h5>Enter your project's code below!</h5>
            <h4 style={{ color: "red" }}>{search}</h4>
            <Form>
              <Form.Group style={{ display: "flex" }} controlId="findProject">
                <Form.Control
                  name="code"
                  value={searchObj.code}
                  placeholder="Enter Your Project's Code"
                  onChange={handleChange}
                  style={{
                    marginLeft: "0",
                    marginTop: "3%",
                    border: "2px solid black",
                  }}
                />
                <Button
                  type="submit"
                  disabled={!searchObj.code}
                  style={{
                    width: "30%",
                    background: "midnightblue",
                    marginTop: "3%",
                    marginLeft: "1%",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
