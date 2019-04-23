import React from "react";
import { Div, Img, Span, P } from "../Style";
import moment from "moment";

// Styled Components
const messageWrapperDiv = {
  main: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "0 0 8px 0"
  }
};

const userAvatarIconStyle = {
  main: {
    width: "36px",
    height: "36px",
    borderRadius: "5px",
    margin: "0 8px 0 0"
  }
};

const userNameSpanStyle = {
  main: {
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 4px 0px 0",
    textColor: "#1d1c1d"
  }
};

const messageDateSpanStyle = {
  main: {
    fontSize: "12px",
    textColor: "#616061"
  }
};

const messagePstyle = {
  main: {
    color: "#1d1c1d",
    fontSize: "15px",
    width: "100%",
    margin: "3px 0 0 0"
  }
};

// End Styled Components

const messageTimeCalculator = timestamp => {
  return moment(timestamp).format("LT");
};

const Message = props => {
  const { content, timestamp } = props.message;
  const { avatar, id, name } = props.user;
  return (
    <Div divStyles={messageWrapperDiv}>
      <Div>
        <Img src={avatar} imgStyles={userAvatarIconStyle} />
      </Div>
      <Div>
        <Span spanStyles={userNameSpanStyle}>{name}</Span>
        <Span spanStyles={messageDateSpanStyle}>
          {messageTimeCalculator(timestamp)}
        </Span>
        <P pStyles={messagePstyle}>{content}</P>
      </Div>
    </Div>
  );
};

export default Message;
