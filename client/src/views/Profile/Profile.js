import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth0 } from "../../utils/auth0Provider";
import API from "../../utils/API";

function Profile() {
  const { loading, user, getTokenSilently } = useAuth0();
  const [projects, setProjects] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [searchObj, setSearchObj] = useState({});
  const [newProj, setNewProj] = useState([]);

  useEffect(() => {
    componentDidMount();
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  function componentDidMount(){
    loadProjects()
  }

  async function loadProjects() {
    const token = await getTokenSilently();
    setFormObject({});
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
  function handleChange(e){
    const { name, value } = e.target;
    setSearchObj({ ...searchObj, [name]: value});
  }

  // when form is submitted use API.createProject method to save project to db
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.title) {
      const token = await getTokenSilently();
      API.createProject(
        {
          title: formObject.title,
          code: formObject.code,
        },
        token
      )
        .then((res) => loadProjects())
        .catch((err) => console.log(err));
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    const proj = projects.filter((project) => project.code === searchObj.code)
    window.location.href="/projects/" + proj[0]._id
  }

  return (
    <Fragment>
      <div className="container profile">
          <h1>Hello {user.name}</h1>
        <div className="row" >
          <div className="col-md-6 createProj">
            <h3>Create New Project</h3>
            <h5>Enter a project name and code below. You and your team members will use this code to gain access to your project.</h5>
            <h5>The project code must be at least 6 characters long.</h5>
            <Form>
              <Form.Group controlId="createProject" id="createProject">
                <Col >
                  <Form.Control
                    name="title"
                    value={formObject.title}
                    placeholder="Enter a Project Name"
                    onChange={handleInputChange}
                    style={{marginBottom: "3%", border: "2px solid black"}}
                  />
                  <Form.Control
                    name="code"
                    value={formObject.code}
                    placeholder="Create a Project Code"
                    onChange={handleInputChange}
                    style={{marginBottom: "3%", border: "2px solid black"}}
                  />
                  <Button disabled={!(formObject.title && formObject.code)} type="submit" style={{width:"30%", marginLeft: "20%", background: "midnightblue"}} onClick={handleFormSubmit}>
                    Create Project
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6 findProj">
            <h3>Search For Your Project</h3>
            <h5>Enter your project's code below, remember your code is case-sensitive.</h5>
          <Form>
              <Form.Group style={{display:"flex"}} controlId="findProject">
                  <Form.Control
                    name="code"
                    value={searchObj.code}
                    placeholder="Enter Your Project's Code"
                    onChange={handleChange}
                    style={{marginLeft: "0", marginTop: "3%", border: "2px solid black"}}
                  />
                  <Button type="submit" disabled={!(searchObj.code)} style={{width:"30%", background:"midnightblue", marginTop: "3%", marginLeft: "1%"}} onClick={handleSubmit}>
                    Submit
                  </Button>
              </Form.Group>
            </Form>
              
          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic"
            style={{width: "100%"}}>
              Find Your Project
            </Dropdown.Toggle>

            <Dropdown.Menu>
             {projects.map((project)=> (
              <Dropdown.Item key={project.title}href={"/projects/" + project._id}>{project.title}</Dropdown.Item>
             ))}
            </Dropdown.Menu>
          </Dropdown> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
