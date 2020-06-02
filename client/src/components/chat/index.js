import "./style.css";
// import io from "socket.io-client";
import openSocket from "socket.io-client";
import { useAuth0 } from "../../utils/auth0Provider";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Moment from "react-moment";
import Name from "../../components/Name/";
const socket = openSocket("http://localhost:3001");

function Chat() {
  const { getTokenSilently } = useAuth0();
  const { id } = useParams();
  const [formValue, setFormValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [dbMessages, setDbMessages] = useState([]);

  useEffect(() => {
    componentDidMount();
  }, []);

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  function handleChange(e) {
    setFormValue(e.target.value);
  }

  async function componentDidMount() {
    getChats();
    // socket = io("http://localhost:3001");
    // const token = await getTokenSilently();
    // API.getChat(token)
    //     .then(res => {setDbMessages(res.data.filter((data)=> data.project === id))})
    //     .catch(err => console.log(err));

    // socket.on("message", (message)=> {
    //     setMessages([message])
    // });
  }

  async function getChats() {
    const token = await getTokenSilently();
    API.getChat(token)
      .then((res) => {
        setDbMessages(res.data.filter((data) => data.project === id).reverse());
      })
      .catch((err) => console.log(err));

    socket.on("message", (message) => {
      setMessages([message]);
    });
  }

  async function sendMessage(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      let message = [
        {
          message: formValue,
          from: "From: ",
          project: id,
        },
      ];
      setMessages(messages.concat(message).reverse());
      socket.emit("message", message);
      const token = await getTokenSilently();
      API.createChat(
        {
          message: formValue,
          from: user.name,
          project: id,
        },
        token
      )
        .then(() => {
          setFormValue("");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div id="chat">
      <div id="grid-container">
        <input
          type="text"
          onChange={handleChange}
          value={formValue}
          placeholder="Type your message here"
          onKeyUp={sendMessage}
        />
      </div>
      <div id="grid-container2">
        <h2
          style={{
            fontFamily: "'PT Sans Narrow', sans-serif",
            fontWeight: "bold",
            marginTop: "3%",
          }}
        >
          Chat Box
        </h2>
        <ul id="messages">
          {messages.map((message) => {
            return (
              <li key={message._id} className="chats">
                <div className="userInfo">
                  <Moment format="MM/DD/YYYY h:mm a" local></Moment>
                  <Name />
                </div>
                {message.message} <span></span>
              </li>
            );
          })}
          {dbMessages.map((message) => {
            return (
              <li key={message._id} className="chats">
                <div className="userInfo">
                  <Moment format="MM/DD/YYYY h:mm a">
                    {message.dateCreated}
                  </Moment>
                  <p id="name">{message.from}</p>
                </div>
                {message.message} <span></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Chat;
