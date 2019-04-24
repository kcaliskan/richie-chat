import React from "react";
import {
  Div,
  Grid,
  Img,
  WriteMessageInput,
  Span,
  Form,
  AddChannelInput,
  FileUploadInput,
  Button,
  MarginBottom
} from "../Style";
import firebase from "../../firebase";
import FileUploadModal from "./FileUploadModal";

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
    background: "#34A853",
    borderRadius: "5px 0 0 5px",
    border: "1px solid #2f994c",
    cursor: "pointer",
    hoverBackground: "#40c463",
    parentHoverBackground: "#39b75a"
  }
};

const replyIconWrapperStyle = {
  main: {
    // padding: "0.4rem 0.35rem",
    width: "30px",
    height: "30px",
    background: "#2f994c",
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
    borderRadius: "0 5px 5px 0",
    boxShadow: "1px 1px #f0f0f0;",
    border: "1px solid #ddd",
    placeholderColor: "#c2c2c2",
    velevele: "#c2c2c2"
  }
};

const messageInputErrorStyle = {
  main: {
    width: "66.3vw",
    padding: "0.5rem 0.75rem",
    borderRadius: "0 5px 5px 0",
    boxShadow: " 0 0 5px #e79494;",
    backgroundColor: "#eeb4b4;",
    border: "1px solid #e79494",
    placeholderColor: "#FFFFFF",
    velevele: "#c2c2c2"
  },
  error: {
    placeholderColor: "#e79494",
    velevele: "#c2c2c2"
  }
};

const messageInputIconWrapper = {
  main: {
    width: "40px",
    height: "40px",
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

//  //  //  //  //  //  //  //  //  //  Modal Style
const warningImgStyle = {
  main: {
    width: "32px"
  }
};

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
    minWidth: "700px",
    backgroundColor: "#FFFFFF"
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

// End of Styled Components

class MessageForm extends React.Component {
  state = {
    message: "",
    messagesRef: this.props.messagesRef,
    user: this.props.user,
    channel: this.props.channel,
    loading: false,
    errors: [],
    showFileUploadModal: false
  };

  messageInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value, errors: [] });
  };

  createMessage = () => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      content: this.state.message,
      user: {
        id: this.props.user.uid,
        avatar: this.props.user.photoURL,
        name: this.props.user.displayName
      }
    };

    return message;
  };

  enterKeyHandler = event => {
    if (event.key === "Enter") {
      this.sendMessageHandler(event);
    }
  };
  sendMessageHandler = event => {
    const { message, messagesRef, user, channel } = this.state;
    if (message) {
      messagesRef
        .child(this.state.channel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({ loading: false, message: "", errors: [] });
        })
        .catch(err => {
          this.setState({
            loading: false,
            message: "",
            errors: this.state.errors.concat(err)
          });
        });
    } else {
      this.setState({
        errors: this.state.errors.concat({ message: "Add a message" })
      });
    }
  };

  handleInputError = errors => {
    return errors.some(error => error.message.toLowerCase().includes("add"));
  };

  loadingChecker = () => {
    if (this.state.loading) {
      return (
        <Div divStyles={replyDivStyle}>
          <Div divStyles={replyIconWrapperStyle}>
            <Img
              src={`../../img/reply-64.png`}
              imgStyles={replyMessageIconStyle}
            />
          </Div>
          <Span spanStyles={sendSpanStyle}>Send Message</Span>
        </Div>
      );
    } else {
      return (
        <Div divStyles={replyDivStyle} onClick={this.sendMessageHandler}>
          <Div divStyles={replyIconWrapperStyle}>
            <Img
              src={`../../img/reply-64.png`}
              imgStyles={replyMessageIconStyle}
            />
          </Div>
          <Span spanStyles={sendSpanStyle}>Send Message</Span>
        </Div>
      );
    }
  };

  fileUploadModalHandler = () => {
    this.setState({ showFileUploadModal: true });
  };

  closeFileUploadModalHandler = () => {
    this.setState({ showFileUploadModal: false });
  };

  displayErrors = errors =>
    errors.map((error, i) => (
      <p key={i} className="warningPstyle">
        <Img src={`../../img/warning.png`} imgStyles={warningImgStyle} />
        <span className="pl-1">{error.message}</span>
      </p>
    ));

  render() {
    return (
      <Grid divStyles={wrapperDivStyle}>
        <Div divStyles={messageInputWrapperStyle}>
          <Div divStyles={messageInputIconWrapper} />
          <WriteMessageInput
            type="text"
            inputStyles={
              this.state.errors.length > 0 && this.handleInputError
                ? messageInputErrorStyle
                : messageInputStyle
            }
            placeholder="Write your message"
            name="message"
            value={this.state.message}
            onChange={this.messageInputHandler}
            onKeyDown={this.enterKeyHandler}
          />
        </Div>
        <Div divStyles={messageButtonsDivStyle}>
          {this.loadingChecker()}
          <Div divStyles={uploadDivStyle}>
            <Span
              spanStyles={uploadSpanStyle}
              onClick={this.fileUploadModalHandler}
            >
              Upload Files
            </Span>
            <Div
              divStyles={uploadIconWrapperStyle}
              onClick={this.fileUploadModalHandler}
            >
              <Img
                src={`../../img/upload-64.png`}
                imgStyles={uploadIconStyle}
              />
            </Div>
          </Div>

          {this.state.showFileUploadModal ? (
            <Div divStyles={modalWrapperDiv}>
              {this.state.errors.length > 0 && (
                <Div divStyles={errorDivStyle}>
                  {this.displayErrors(this.state.errors)}
                </Div>
              )}
              <Form onSubmit={this.handleSubmit}>
                <Span spanStyles={inputSpanStyle}>Select File(s)</Span>
                <FileUploadInput
                  name="file"
                  type="file"
                  inputStyles={
                    this.handleInputError(this.state.errors, "name") ||
                    this.handleInputError(this.state.errors, "field")
                      ? errorInputStyle
                      : channelInputStyle
                  }
                  onChange={this.handleChange}
                />
                <MarginBottom />
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
                    <Span marginleft>Upload</Span>
                  </Button>
                  <Button
                    type="button"
                    buttonStyles={cancelButtonStyle}
                    onClick={this.closeFileUploadModalHandler}
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
          ) : null}
        </Div>
      </Grid>
    );
  }
}

export default MessageForm;
