# Strategy-Scope

## Description

This project is designed to combine a communication tool with a Kanban tool. In order to increase efficiency among teams, this project aims to reduce the need to switch between applications and allow teams to use a one stop shop for their project needs.

Users will be prompted with a signin popup window using Auth0. Once users have successfully signed in they will be taken to their profile page where they are able to either create a new project or enter an existing project's unique code to gain access to the project. On the project's page the user will see a deadline bar with existing tasks sorted by their deadline date and below this a Kanban with various tasks added by team members complete with title and description is displayed. These tasks can be moved around the columns which are labeled to-do, in progress, and done. When they are moved in the columns, the tasks are updated in the database so it persists through reloads.

Finally, this project features a chat system that is specific to the project. Users can click the chat button and speak with team members without having to switch applications.

## Table of Contents
* [Usage](#Usage)
* [Demonstration](#Demonstration)
* [Technologies](#Technologies)
* [Contributers](#Contributers)
* [Deployed-Link](#Deployed-Link)
* [Developer](#Devloper)

## Usage

To use the application simply head to the [deployed-link](https://strategyscope.herokuapp.com/profile)!

## Demonstration

Login Screen
![strategy scope sign in logo](/images/signinlogo.png)
![strategy scope login popup](/images/loginScreen.png)

Profile View
![strategy scope profile](/images/profile.png)

Project View
![strategy scope project](/images/kanbanview.png)

Chat View
![strategy scope chat](/images/chat.png)

Add Task View 
![strategy scope add task](/images/addtask1.png)
![strategy scope add task2](/images/addtask2.png)

## Technologies Used

React, Express, Node, MongoDB, Auth0, Axios, React Calendar, React Beautiful Drag n Drop, React Bootstrap, React Router, React Scripts, and Socket IO.

## Contributers

Collaborator(s) - Ian Sears, Kenneth Achumahara, Justin Kellogg

## Future-Development

In the future I plan on implementing a video chat system like Zoom as well as the ability to send files, images, and individual messages in the chat. 

## Deployed-Link

https://strategyscope.herokuapp.com/

## Developer

Megan Coppins

https://github.com/MeganLCoppins/Strategy-Scope