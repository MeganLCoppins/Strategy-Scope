// import "./style.css";
// import io from "socket.io-client";
// import { useAuth0 } from "../../utils/auth0Provider";
// import React from "react";
// import Name from "../../components/Name/";

// console.log(useAuth0);

// class Chat extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "",
//       messages: [],
//     };
//     this.handleChange = this.handleChange.bind(this);

//     this.sendMessage = this.sendMessage.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   componentDidMount() {
//     // this.socket = io('https://6056e275.ngrok.io')
//     // this.socket = io("http://localhost:5000");
//     this.socket = io("http://localhost:3000");

//     this.socket.on("message", (message) => {
//       this.setState({
//         messages: [message, ...this.state.messages],
//       });
//     });
//   }

//   sendMessage(event) {
//     event.preventDefault();
//     const body = event.target.value;
//     if (event.keyCode === 13 && body) {
//       let message = {
//         body,
//         from: "From: ",
//       };
//       this.setState({ value: "",
//         messages: [message, ...this.state.messages],
//       });
//       this.socket.emit("message", message);
//     }
//   }

//   render() {
//     return (
//       <div id="chat">
//         <div id="grid-container">
//           <input
//             type="text"
//             onChange={this.handleChange}
//             value={this.state.value}
//             placeholder="Type your message here"
//             onKeyUp={this.sendMessage}
//           />
//         </div>
//         <div id="grid-container2">
//           <h2 style={{fontFamily: "'PT Sans Narrow', sans-serif", fontWeight: "bold"}}>Chat Box</h2>
//           <ul id="messages">
//             {this.state.messages.slice(0).reverse().map((message) => {
//               return (
//                 <li key={message.body} id="chats">
//                   <div id="userInfo">
//                     <Name />
//                   </div>
//                   {message.body} <span></span>
//                 </li>
//               );
//             })}{" "}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Chat;
