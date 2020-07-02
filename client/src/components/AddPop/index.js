import React from "react";
import "./style.css";
import AddTask from "../../views/AddTask/AddTask";

class Popup2 extends React.Component {
  render() {
    return (
      <div className="popup2">
        <AddTask />
        <div className="popup2\_inner"></div>
      </div>
    );
  }
}

export default Popup2;
