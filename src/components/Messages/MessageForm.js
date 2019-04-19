import React from "react";
import { Div, Grid, Img, WriteMessageInput, Span } from "../Style";

// Styled Components
const wrapperDivStyle = {
  main: {
    display: "grid",
    gridTemplateRows: "minmax(max-content, 1fr);",
    background: "#FFF",
    margin: "1rem 1rem",
    padding: "1rem 1rem",
    borderRadius: "5px",
    border: "1px solid #ededed",
    boxShadow: "1px 2px #ededed;",
    position: "fixed",
    zIndex: "10",
    width: "71.8vw"
  }
};

const messageButtonsDivStyle = {
  main: {
    display: "flex",
    borderRadius: "5px"
  }
};

const replyMessageIconStyle = {
  main: {
    height: "18px",
    width: "18px",
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    margin: "auto"
  }
};

const sendSpanStyle = {
  main: {
    textColor: "#FFF",
    fontWeight: "700",
    fontSize: "16px",
    margin: "auto auto"
  }
};

const replyDivStyle = {
  main: {
    display: "flex",
    width: "35vw",
    background: "#FBBC05",
    borderRadius: "5px 0 0 5px",
    border: "1px solid #d5a003",
    cursor: "pointer",
    hoverBackground: "#fbc62b",
    parentHoverBackground: "#e8af03"
  }
};

const replyIconWrapperStyle = {
  main: {
    // padding: "0.4rem 0.35rem",
    width: "30px",
    height: "30px",
    background: "#d5a003",
    position: "relative"
  }
};

const uploadDivStyle = {
  main: {
    display: "flex",
    width: "35vw",
    background: "#4285F4",
    borderRadius: "0 5px 5px 0px",
    border: "1px solid #1d6df2",
    cursor: "pointer",
    hoverBackground: "#5591f5",
    parentHoverBackground: "#4385f4"
  }
};

const uploadIconWrapperStyle = {
  main: {
    // padding: "0.4rem 0.35rem",
    width: "30px",
    height: "30px",
    background: "#3079f3",
    position: "relative"
  }
};

const uploadIconStyle = {
  main: {
    height: "18px",
    width: "18px",
    display: "block",
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    margin: "auto"
  }
};

const uploadSpanStyle = {
  main: {
    textColor: "#FFF",
    fontWeight: "700",
    fontSize: "16px",
    margin: "auto auto"
  }
};

const messageInputWrapperStyle = {
  main: {
    display: "flex",
    marginBottom: "0.75rem"
  }
};

const messageInputStyle = {
  main: {
    width: "66.3vw",
    padding: "0.5rem 0.75rem",
    borderRadius: "0 5px 5px 0"
  }
};

const messageInputIconWrapper = {
  main: {
    width: "50px",
    height: "50px",
    backgroundAll: "#e7e7e7 url('../../img/plus-grey-64.png')no-repeat center",
    backgroundSize: "24px 24px",
    borderRadius: "5px 0 0 5px",
    cursor: "pointer",
    border: "1px solid #ddd",
    boxShadow: "1px 1px #f0f0f0;",
    hoverBackgroundAll:
      "#34A853 url('../../img/plus-white-64.png') no-repeat center",
    hoverBackgroundSize: "24px 24px"
  }
};

// End of Styled Components

class MessageForm extends React.Component {
  render() {
    return (
      <Grid divStyles={wrapperDivStyle}>
        <Div divStyles={messageInputWrapperStyle}>
          <Div divStyles={messageInputIconWrapper} />

          <WriteMessageInput
            type="text"
            inputStyles={messageInputStyle}
            placeholder="Write your message"
          />
        </Div>
        <Div divStyles={messageButtonsDivStyle}>
          <Div divStyles={replyDivStyle}>
            <Div divStyles={replyIconWrapperStyle}>
              <Img
                src={`../../img/reply-64.png`}
                imgStyles={replyMessageIconStyle}
              />
            </Div>
            <Span spanStyles={sendSpanStyle}>Send Message</Span>
          </Div>
          <Div divStyles={uploadDivStyle}>
            <Span spanStyles={uploadSpanStyle}>Upload Files</Span>
            <Div divStyles={uploadIconWrapperStyle}>
              <Img
                src={`../../img/upload-64.png`}
                imgStyles={uploadIconStyle}
              />
            </Div>
          </Div>
        </Div>
      </Grid>
    );
  }
}

export default MessageForm;
