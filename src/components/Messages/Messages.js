import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import { Div } from "../Style";
import firebase from "../../firebase";
import Message from "./Message";

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
    channel: this.props.channel,
    messageLoading: true,
    messages: []
  };

  componentDidMount() {
    const { user, channel } = this.state;

    if (user && channel) {
      this.addListeners(channel.id);
    }
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  addMessageListener = channelId => {
    const { messagesRef } = this.state;

    let loadedMessage = [];
    messagesRef.child(channelId).on("child_added", snap => {
      loadedMessage.push(snap.val());

      this.setState({
        messages: loadedMessage,
        messageLoading: false
      });
    });
  };

  displayMessages = messages => {
    const { messageLoading } = this.state;

    if (messages.length > 0 && !messageLoading) {
      const messageComponent = messages.map(message => (
        <Message
          user={message.user}
          key={message.timestamp}
          message={message}
          time={message.timestamp}
        />
      ));

      return messageComponent;
    } else if (messageLoading && messages.length > 0) {
      console.log("loading");
      return <div> messages loading </div>;
    } else if (messages.length < 1) {
      console.log("no message");
      return (
        <div>
          {" "}
          there is no message in this channel yet. Start a conversation now.{" "}
        </div>
      );
    }
  };

  render() {
    const { messagesRef, user, channel } = this.state;

    return (
      <div>
        <MessagesHeader />
        <Div divStyles={wrapperDivStyle}>
          {" "}
          {this.displayMessages(this.state.messages)}{" "}
        </Div>{" "}
        <MessageForm messagesRef={messagesRef} user={user} channel={channel} />{" "}
      </div>
    );
  }
}

export default Messages;
