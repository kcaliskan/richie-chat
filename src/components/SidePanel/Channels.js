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
import firebase from "../../firebase";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../actions/index";

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
    // width: "700px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    maxWidth: "700px",
    minWidth: "700px"
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

const warningImgStyle = {
  main: {
    width: "32px"
  }
};

const channelListUlStyle = {
  main: {
    listStyle: "none"
  }
};

const channelListLiStyle = {
  main: {}
};

const channelLinkStyle = {
  main: {
    display: "block",
    textColor: "#FFF",
    padding: "0.25rem 1rem",
    hoverBackground: "#0e62ed"
  }
};

const activeChannelLinkStyle = {
  main: {
    display: "block",
    textColor: "#FFF",
    padding: "0.25rem 1rem",
    hoverBackground: "#FBBC05",
    background: "#FBBC05"
  }
};
// End of Styled Components

class Channels extends React.Component {
  state = {
    channels: [],
    showModal: false,
    channelName: "",
    channelDescription: "",
    errors: [],
    currentUser: this.props.user,
    channelsRef: firebase.database().ref("channels"),
    firstLoad: true,
    activeChannel: ""
  };

  componentDidMount() {
    this.channelAddListeners();
  }

  componentWillUnmount() {
    this.removeChannelListeners();
  }

  channelAddListeners = () => {
    let loadedChannels = [];

    this.state.channelsRef.on("child_added", snap => {
      loadedChannels.push(snap.val());
      this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
    });
  };

  removeChannelListeners = () => {
    this.state.channelsRef.off();
  };

  modalHandler = () => this.setState({ showModal: true, errors: [] });

  modalCloseHandler = event => {
    event.preventDefault();
    this.setState({ showModal: false, errors: [] });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, errors: [] });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.isFormValid(this.state)) {
      this.addChannelToFirebase();
      this.modalCloseHandler(event);
    }
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      // throw error
      // error = { message: "Fill in all fields" };
      error = { message: "Fill in all fields." };
      this.setState({ errors: errors.concat(error) });
      this.handleInputError(this.state.errors, "fill");
      return false;
    } else if (!this.isChannelNameValid(this.state)) {
      // throw error
      error = { message: "Channel name must be longer than 2 characters." };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isChannelDescriptionValid(this.state)) {
      // throw error
      error = {
        message: "Channel description must be longer than 6 characters."
      };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ channelName, channelDescription }) => {
    return !channelName.length || !channelDescription.length;
  };

  isChannelNameValid = ({ channelName }) => {
    if (channelName.length < 2) {
      return false;
    } else {
      return true;
    }
  };

  isChannelDescriptionValid = ({ channelDescription }) => {
    if (channelDescription.length < 5) {
      return false;
    } else {
      return true;
    }
  };

  handleInputError = (errors, inputName) => {
    return errors.some(error =>
      error.message.toLowerCase().includes(inputName)
    );
  };

  displayErrors = errors =>
    errors.map((error, i) => (
      <p key={i} className="warningPstyle">
        <Img src={`../../img/warning.png`} imgStyles={warningImgStyle} />
        <span className="pl-1">{error.message}</span>
      </p>
    ));

  addChannelToFirebase = () => {
    const {
      channelsRef,
      channelName,
      channelDescription,
      currentUser
    } = this.state;

    let newChannelKey = channelsRef.push().key;

    let newChannel = {
      id: newChannelKey,
      channelName: channelName,
      channelDescription: channelDescription,
      createdBy: {
        name: currentUser.displayName,
        avatar: currentUser.photoURL
      }
    };

    channelsRef
      .child(newChannelKey)
      .set(newChannel)
      .then(() => {
        this.setState({ channelName: "", channelDescription: "" });
        this.modalCloseHandler();
        console.log("channel added");
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayChannels = channels =>
    channels.length > 0 &&
    channels.map(channel => (
      <Li liStyles={channelListLiStyle} key={channel.id}>
        <StyledLink
          linkStyles={
            this.state.activeChannel.id === channel.id
              ? activeChannelLinkStyle
              : channelLinkStyle
          }
          onClick={() => this.changeChannel(channel)}
        >
          # {channel.channelName}
        </StyledLink>
      </Li>
    ));

  changeChannel = channel => {
    this.props.setCurrentChannel(channel);
    this.setActiveChannel(channel);
  };

  setFirstChannel = () => {
    const firstChannel = this.state.channels[0];
    if (this.state.firstLoad && this.state.channels.length > 0) {
      this.props.setCurrentChannel(firstChannel);
      this.setActiveChannel(firstChannel);
      this.setState({ firstLoad: false });
    }
  };

  setActiveChannel = channel => {
    this.setState({ activeChannel: channel });
  };

  render() {
    return (
      <Div>
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
        <MarginBottom half />
        <Ul ulStyles={channelListUlStyle}>
          {this.displayChannels(this.state.channels)}
        </Ul>
        {this.state.showModal ? (
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
        ) : null}
      </Div>
    );
  }
}

export default connect(
  null,
  { setCurrentChannel }
)(Channels);
