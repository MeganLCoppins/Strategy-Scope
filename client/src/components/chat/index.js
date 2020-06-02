import "./style.css";
import io from "socket.io-client";
import openSocket from "socket.io-client";
import { useAuth0 } from "../../utils/auth0Provider";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Name from "../../components/Name/";
const socket = openSocket('http://localhost:3001')
// let socket;
function Chat(){
    const { getTokenSilently } = useAuth0();
    const {id} = useParams();
    const [formValue, setFormValue] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        componentDidMount();
    })

    const { loading, user } = useAuth0();

    if (loading || !user) {
      return <div>Loading...</div>;
    }

    function handleChange(e) {
        setFormValue( e.target.value );
    }

    function componentDidMount(){
        // socket = io("http://localhost:3001");

        socket.on("message", (message)=> {
            setMessages([message])
        });
    }

    async function sendMessage(e) {
        e.preventDefault();

        // const body = e.target.value;
        if(e.keyCode === 13 ) {
            let message = [{
                message: formValue,
                from: "From: ",
                project: id
            }];
            // setFormValue("")
            setMessages(messages.concat(message));
            socket.emit("message", message);
            const token = await getTokenSilently();
            API.createChat({
                message: formValue,
                from: user.name,
                project: id
                }, token)
                .then(()=>{
                    setFormValue("");
                })
                .catch(err=> console.log(err))
        }
    }

    return(
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
          <h2 style={{fontFamily: "'PT Sans Narrow', sans-serif", fontWeight: "bold"}}>Chat Box</h2>
          <ul id="messages">
            {messages.map((message) => {
              return (
                <li key={message.message} id="chats">
                  <div id="userInfo">
                    <Name />
                  </div>
                  {message.message} <span></span>
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </div>
    )
}

export default Chat;