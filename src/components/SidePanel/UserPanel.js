import React from "react";
import firebase from "../../firebase";
import { Div, Img, StyledLink, MarginBottom } from "../Style";
// import { CSSTransitionGroup } from "react-transition-group";

// Styled Components
const logoImgStyle = {
  main: {
    borderRadius: "50px;",
    border: "5px solid #F5C023",
    boxShadow: "0px 0px 2px 0px #CC9A08;"
  }
};

const userMenuWrapperDiv = {
  main: {
    display: "flex;",
    flexFlow: "column",
    alignItems: "center",
    background: "#FDFCFA;",
    marginTop: "-2px",
    padding: "1rem 0",
    boxShadow: "0px 0px 2px 0px #D4D4D4;",
    borderRadius: "4px",
    position: "absolute",
    top: "152px"
  }
};

const userWrapperDivStyle = {
  main: {
    display: "flex;",
    flexFlow: "column",
    alignItems: "center",
    marginBottom: "1.5rem"
  }
};

const linkBtnStyle = {
  main: {
    display: "inline-block",
    position: "relative",
    padding: "0.5rem 1rem;",
    background: "#FDFCFA;",
    boxShadow: "0px 0px 2px 0px #D4D4D4;",
    borderRadius: "4px",
    fontWeight: "500",
    fontSize: "16px"
  }
};

const userSectionLinkStyle = {
  main: {
    padding: "0.5rem 2rem;",
    width: "100%",
    fontWeight: "500"
  }
};

class UserPanel extends React.Component {
  state = {
    showMenu: false,
    currentUser: this.props.user,
    menuDiv: React.createRef()
  };

  showMenu = event => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = event => {
    if (event.target.className !== "menu-item") {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  };

  signOutHandle = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <Div divStyles={userWrapperDivStyle}>
        <Img src={this.state.currentUser.photoURL} imgStyles={logoImgStyle} />
        <MarginBottom half />

        <StyledLink onClick={this.showMenu} linkStyles={linkBtnStyle}>
          {this.state.currentUser.displayName} ▼
        </StyledLink>

        {this.state.showMenu ? (
          <Div className="menu" divStyles={userMenuWrapperDiv}>
            <StyledLink linkStyles={userSectionLinkStyle}>Settings</StyledLink>
            <MarginBottom half />
            <StyledLink linkStyles={userSectionLinkStyle}>
              Change Avatar
            </StyledLink>
            <MarginBottom half />
            <StyledLink
              onClick={this.signOutHandle}
              linkStyles={userSectionLinkStyle}
            >
              Sign Out
            </StyledLink>
          </Div>
        ) : null}
      </Div>
    );
  }
}

export default UserPanel;
