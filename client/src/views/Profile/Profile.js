import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "../../utils/auth0Provider";
import API from "../../utils/API";

function Profile() {
  const { loading, user, getTokenSilently } = useAuth0();
  const [projects, setProjects] =  useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadProjects();
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  // const { getTokenSilently } = useAuth0();


  async function loadProjects() {
    const token = await getTokenSilently();
    API.getProjects(token)
      .then((res) => {
        setProjects(res.data);
      })

      .catch((err) => console.log(err));
  }
  const renderInfo = () => {
    if (projects.length !== 0) {
      return projects.map((project) => (
        <li>
          <div key={project._id}>
            <Link to={"/projects/" + project._id}>
            <h4>{project.title}</h4>
            </Link>
          </div>
        </li>
      ));
    } else {
      return <h1>No Projects to Display</h1>;
    }
  };

  //   update component state when user types in input field
  function handleInputChange(e){
    const { name, value } =
    e.target;
    setFormObject({...formObject, [name]: value})
};

// when form is submitted use API.createTask method to save task data
async function handleFormSubmit(e){
    e.preventDefault();
    if(formObject.title) {
      const token = await getTokenSilently();
        API.createProject( {
            title: formObject.title
        }, token).then(function(){
          goToProject();
          //reset the state for the forms after data is passed
          setFormObject({"title":""});
        })
        .catch(err => console.log(err));
    }
}
  function goToProject() {

  }
  return (
    <Fragment>
      <div className="profile">
        <div id="projects">
          {/* <img src={user.picture} alt="Profile" /> */}
          <h1>Hello {user.name}</h1>
          <div>
            <h3>Create New Project</h3>
            <Form >
              <Form.Group as={Row} controlId="createProject">
                <Col sm={10}>
                  <Form.Control name="title" 
                  value={formObject.title}
                  placeholder="Enter The Project Name" 
                  onChange={handleInputChange}/>
                  <Button type="submit" onClick={handleFormSubmit}>Create Project</Button>
                </Col>
              </Form.Group>
            </Form>
            </div>
            <div>
              <h3>Work on Existing Project</h3>
            <Form >
              <Form.Group as={Row} controlId="projectName">
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Enter Your Project Name" />
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
          <ul>
            {renderInfo()}
          </ul>
        </div>
      </div>

      {/* <h2>{user.name}</h2> */}
      {/* <p>{user.email}</p> */}
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;
