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
  const [newProj, setNewProj] = useState({});
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadProjects();
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
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

  // when form is submitted use API.createProject method to save task data
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.title) {
      const token = await getTokenSilently();
      API.createProject(
        {
          title: formObject.title,
        },
        token
      )
        .then((res) => loadProjects())
        .catch((err) => console.log(err));
    }
  }


  return (
    <Fragment>
      <div className="container profile">
          <h1>Hello {user.name}</h1>
        <div className="row" >
          {/* <img src={user.picture} alt="Profile" /> */}
          <div className="col-md-6 createProj">
            <h3>Create New Project</h3>
            <Form>
              <Form.Group as={Row} controlId="createProject">
                <Col sm={10}>
                  <Form.Control
                    style={{marginLeft:"3%"}}
                    name="title"
                    value={formObject.title}
                    placeholder="Enter The Project Name"
                    onChange={handleInputChange}
                  />
                  <Button type="submit" onClick={handleFormSubmit}>
                    Create Project
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6 findProj">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic"
            style={{width: "100%"}}>
              Find Your Project
            </Dropdown.Toggle>

            <Dropdown.Menu>
             {projects.map((project)=> (
              <Dropdown.Item key={project.title}href={"/projects/" + project._id}>{project.title}</Dropdown.Item>
             ))}
            </Dropdown.Menu>
          </Dropdown>
          {/* <ul>
            {renderInfo()}

          </ul> */}
          </div>
        </div>
      </div>

      {/* <h2>{user.name}</h2> */}
      {/* <p>{user.email}</p> */}
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
}

export default Profile;
