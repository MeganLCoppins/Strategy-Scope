import axios from "axios";

export default {
  getProjects: function (token) {
    return axios.get("/api/projects",{
    headers: {
      authorization: `Bearer ${token}`,
    },
    });
  },
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  updateProject: function (id, newTask, token) {
    console.log( newTask );
    return axios.put(
      "/api/projects/" + id, newTask,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  createProject: function (projectData, token) {
    return axios.post("/api/projects/", projectData, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  getTasks: function (token) {
    return axios.get("/api/tasks", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },

  getTask: function (id) {
    return axios.get("/api/tasks/" + id);
  },

  deleteTasks: function (id, token) {
    return axios.delete("/api/tasks/" + id, token,{
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },

  createTask: function (taskData, token) {
    return axios.post("/api/tasks/add", taskData, {
      headers: { 
        authorization: `Bearer ${token}`
      }
    });
  },

  updateTask: function (id, status, token) {
    return axios.put(
      "/api/tasks/" + id,
      { status },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },

  getDeadlines: function () {
    return axios.get("/api/deadline");
  },

  updateDeadlines: function (id) {
    return axios.put("/api/deadline/" + id);
  },

  deleteDeadline: function (id) {
    return axios.delete("/api/deadline/" + id);
  },
};
