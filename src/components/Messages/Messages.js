import React from "react";
import MessagesHeader from "./MessagesHeader";
import { Div, Grid, Img, Span, SearchInput } from "../Style";

// Styled Components
const wrapperDivStyle = {
  main: {
    background: "#FFF",
    margin: "1rem 1rem",
    padding: "1rem 1rem",
    borderRadius: "5px",
    border: "1px solid #ededed",
    boxShadow: "1px 2px #ededed;",
    height: "72vh",
    overflowY: "scroll"
  }
};

class Messages extends React.Component {
  render() {
    return (
      <div>
        <MessagesHeader />
        <Div divStyles={wrapperDivStyle}>Messges</Div>
      </div>
    );
  }
}

export default Messages;
