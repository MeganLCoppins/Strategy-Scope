import Popup from "../popup/index";
import React, { Component } from "react";
import logo from "../images/logo7.png";

class PopButt extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div>
        <button
          className="chatButt"
          onClick={this.togglePopup.bind(this)}
          src={logo}
          alt="chat"
        >
          Chat
        </button>
        {this.state.showPopup ? (
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default PopButt;
