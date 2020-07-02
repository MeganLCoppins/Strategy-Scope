import React from "react";
import { Router, Switch } from "react-router-dom";
import history from "./utils/history";
import { useAuth0 } from "./utils/auth0Provider";
import PrivateRoute from "../src/components/PrivateRoute";
import "./App.css";

// Common
import Navbar from "./common/Navbar";

// Views
import Home from "./views/Home";
import AddTask from "./views/AddTask/AddTask";
import Profile from "../src/views/Profile/Profile";
import Project from "./views/ViewProject/ViewProject";
import Splash from "./views/SplashPage/index";

function App() {
  const { loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Splash />;
  }

  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/tasks/projects/:id" component={AddTask} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/projects/:id" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
