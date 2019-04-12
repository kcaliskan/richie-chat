import React from "react";
import { Div, Img, P, Form, Span, AddChannelInput } from "../Style";

//Styled Components
const wrapperDiv = {
  main: {
    display: "flex;",
    flexFlow: "row;",
    alignItems: "center",
    padding: "0 1rem"
  }
};

const channelIconStyle = {
  main: {
    width: "32px;",
    height: "32px;"
  }
};

const addChannelIconStyle = {
  main: {
    width: "32px;",
    height: "32px;",
    marginLeft: "auto",
    transition: "transform 800ms ease-in-out;",
    transform: "rotateZ(360deg);",
    cursor: "pointer"
  }
};

const channelsTextStyle = {
  main: {
    color: "#FFF;",
    fontSize: "14px;",
    fontWeight: "900",
    margin: "0 0.5rem;"
  }
};

const modalWrapperDiv = {
  main: {
    display: "flex;",
    flexFlow: "column;",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8);"
  }
};

const channelInputStyle = {
  main: {
    display: "block",
    padding: "1rem 1rem",
    width: "700px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd"
  }
};

const inputSpanStyle = {
  main: {
    display: "inline-block",
    margin: "1rem 0",
    fontSize: "24px",
    fontWeight: "700",
    color: "#FBBC05"
  }
};

const formButtonsWrapper = {
  main: {
    display: "flex;",
    flexFlow: "row;"
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

const approveIcon = {
  main: {
    width: "20px;",
    height: "20px;"
  }
};

const cancelIcon = {
  main: {
    width: "20px;",
    height: "20px;"
  }
};

class Channels extends React.Component {
  state = { channels: [], showModal: false };

  modalHandler = () => this.setState({ showModal: true });

  modalCloseHandler = () => this.setState({ showModal: false });

  render() {
    return (
      <React.Fragment>
        <Div divStyles={wrapperDiv}>
          <Img imgStyles={channelIconStyle} src={`../../img/group-64.png`} />
          <P pStyles={channelsTextStyle}>
            {" "}
            CHANNELS ({this.state.channels.length})
          </P>
          <Img
            imgStyles={addChannelIconStyle}
            src={`../../img/add-64.png`}
            onClick={this.modalHandler}
          />
        </Div>
        {this.state.showModal ? (
          <Div divStyles={modalWrapperDiv}>
            <Form>
              <Span spanStyles={inputSpanStyle}>Channel Name</Span>
              <AddChannelInput
                name="channelName"
                type="text"
                placeholder="Name of Channel"
                inputStyles={channelInputStyle}
              />
              <Span spanStyles={inputSpanStyle}>Channel Description</Span>
              <AddChannelInput
                name="channelDescription"
                type="text"
                placeholder="About the Channel"
                inputStyles={channelInputStyle}
                marginbottom1
              />
            </Form>
            <Div divStyles={formButtonsWrapper}>
              <Div divStyles={sendButtonStyle}>
                {" "}
                <Img
                  imgStyles={approveIcon}
                  src={`../../img/approve-64.png`}
                />{" "}
                <Span marginleft>Add</Span>
              </Div>
              <Div
                divStyles={cancelButtonStyle}
                onClick={this.modalCloseHandler}
              >
                {" "}
                <Img
                  imgStyles={cancelIcon}
                  src={`../../img/cancel-64.png`}
                />{" "}
                <Span marginleft>Cancel</Span>
              </Div>
            </Div>
          </Div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Channels;
