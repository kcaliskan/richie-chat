import React from "react";
import {
  Div,
  Img,
  P,
  Form,
  Span,
  AddChannelInput,
  Button,
  Ul,
  Li,
  MarginBottom,
  StyledLink
} from "../Style";

const modalWrapperDiv = {
  main: {
    display: "flex;",
    flexFlow: "column;",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "11",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8);"
  }
};

const errorDivStyle = {
  main: {
    width: "700px",
    margin: "0 auto",
    textAlign: "center",
    background: "#FF6A6A",
    padding: "1.5rem 0",
    fontSize: "18px",
    textColor: "#FFF",
    fontWeight: "500",
    borderRadius: "5px;",
    border: "1px solid #e79494;",
    marginBottom: "1rem"
  }
};

const channelInputStyle = {
  main: {
    display: "block",
    padding: "1rem 1rem",
    // width: "700px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    maxWidth: "700px",
    minWidth: "700px"
  }
};

const errorInputStyle = {
  main: {
    display: "block",
    padding: "1rem 1rem",
    width: "700px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd"
  },
  error: {}
};

const inputSpanStyle = {
  main: {
    display: "inline-block",
    margin: "1rem 0",
    fontSize: "24px",
    fontWeight: "700",
    textColor: "#FBBC05"
  }
};

const formButtonsWrapper = {
  main: {
    display: "flex;",
    flexFlow: "row;",
    justifyContent: "center"
  }
};

const sendButtonStyle = {
  main: {
    display: "flex",
    flexFlow: "row",
    borderRadius: "4px",
    padding: "0.5rem 1rem;",
    background: "#34A853;",
    textColor: "#FFF",
    fontSize: "18px",
    fontWeight: "700",
    marginRight: "1rem",
    cursor: "pointer",
    hoverBackground: "#40c463;",
    border: "2px solid #2f994c"
  }
};

const approveIcon = {
  main: {
    width: "20px;",
    height: "20px;"
  }
};

const cancelButtonStyle = {
  main: {
    display: "flex",
    flexFlow: "row",
    borderRadius: "4px",
    padding: "0.5rem 1rem;",
    background: "#EA4335;",
    textColor: "#FFF",
    fontSize: "18px",
    fontWeight: "700",
    marginRight: "1rem",
    cursor: "pointer",
    hoverBackground: "#ee6459;",
    border: "2px solid #e83223"
  }
};

const cancelIcon = {
  main: {
    width: "20px;",
    height: "20px;"
  }
};

class FileUploadModal extends React.Component {
  state = {
    message: "",
    messagesRef: this.props.messagesRef,
    user: this.props.user,
    channel: this.props.channel,
    loading: false,
    errors: [],
    showFileUploadModal: false
  };

  render() {
    return (
      <Div divStyles={modalWrapperDiv}>
        {this.state.errors.length > 0 && (
          <Div divStyles={errorDivStyle}>
            {this.displayErrors(this.state.errors)}
          </Div>
        )}
        <Form onSubmit={this.handleSubmit}>
          <Span spanStyles={inputSpanStyle}>Channel Name</Span>
          <AddChannelInput
            name="channelName"
            type="text"
            placeholder="Name of Channel"
            inputStyles={
              this.handleInputError(this.state.errors, "name") ||
              this.handleInputError(this.state.errors, "field")
                ? errorInputStyle
                : channelInputStyle
            }
            onChange={this.handleChange}
          />
          <Span spanStyles={inputSpanStyle}>Channel Description</Span>
          <AddChannelInput
            name="channelDescription"
            type="text"
            placeholder="About the Channel"
            inputStyles={
              this.handleInputError(this.state.errors, "description") ||
              this.handleInputError(this.state.errors, "field")
                ? errorInputStyle
                : channelInputStyle
            }
            marginbottom1
            onChange={this.handleChange}
          />

          <Div divStyles={formButtonsWrapper}>
            <Button
              type="submit"
              name="submit"
              value="Submit"
              buttonStyles={sendButtonStyle}
            >
              {" "}
              <Img
                imgStyles={approveIcon}
                src={`../../img/approve-64.png`}
              />{" "}
              <Span marginleft>Add</Span>
            </Button>
            <Button
              type="button"
              buttonStyles={cancelButtonStyle}
              onClick={this.modalCloseHandler}
            >
              {" "}
              <Img
                imgStyles={cancelIcon}
                src={`../../img/cancel-64.png`}
              />{" "}
              <Span marginleft>Cancel</Span>
            </Button>
          </Div>
        </Form>
      </Div>
    );
  }
}

export default FileUploadModal;
