import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import { Div } from "../Style";
import firebase from "../../firebase";

// Styled Components
const wrapperDivStyle = {
  main: {
    background: "#FFF",
    margin: "1rem 1rem",
    padding: "1rem 1rem",
    borderRadius: "5px",
    border: "1px solid #ededed",
    boxShadow: "1px 2px #ededed;",
    height: "60vh",
    overflowY: "scroll"
  }
};

class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    user: this.props.user,
    channel: this.props.channel
  };

  render() {
    const { messagesRef, user, channel } = this.state;

    return (
      <div>
        <MessagesHeader />
        <Div divStyles={wrapperDivStyle}>Messges</Div>
        <MessageForm messagesRef={messagesRef} user={user} channel={channel} />
      </div>
    );
  }
}

export default Messages;
