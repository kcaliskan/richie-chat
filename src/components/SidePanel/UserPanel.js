import React from "react";
import firebase from "../../firebase";
import { Div, Img, StyledLink, MarginBottom } from "../Style";

// Styled Components
const logoImgStyle = {
  main: {
    borderRadius: "50px;",
    border: "5px solid #F5C023",
    boxShadow: "0px 0px 5px 0px #CC9A08;"
  }
};

const userMenuWrapperDiv = {
  main: {
    display: "flex;",
    flexFlow: "column",
    alignItems: "center",
    background: "FDFCFA;",
    marginTop: "-2px",
    padding: "1rem 1.5rem;",
    boxShadow: "0px 0px 2px 0px #D4D4D4;",
    borderRadius: "4px"
  }
};

const userWrapperDivStyle = {
  main: {
    display: "flex;",
    flexFlow: "column",
    alignItems: "center"
  }
};

const linkBtnStyle = {
  main: {
    padding: "0.5rem 1rem;",
    background: "FDFCFA;",
    boxShadow: "0px 0px 2px 0px #D4D4D4;",
    borderRadius: "4px"
  }
};

const linkBtnStyle2 = {
  main: {
    padding: "0.5rem 1rem;"
  }
};

class UserPanel extends React.Component {
  state = {
    showMenu: false,
    userName: this.props.user.displayName,
    photoURL: this.props.user.photoURL
  };

  showMenu = event => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = event => {
    if (event.target.className !== "menu-item") {
      console.log(event.target.className);
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
        <Img src={this.state.photoURL} imgStyles={logoImgStyle} />
        <MarginBottom half />
        <StyledLink onClick={this.showMenu} linkStyles={linkBtnStyle}>
          {this.state.userName} ▼
        </StyledLink>

        {this.state.showMenu ? (
          <Div className="menu" divStyles={userMenuWrapperDiv}>
            <StyledLink linkStyles={linkBtnStyle2}>Change Avatar</StyledLink>
            <MarginBottom half />
            <StyledLink>Menu item 1</StyledLink>
            <MarginBottom half />
            <StyledLink className="menu-item" onClick={this.signOutHandle}>
              Sign Out
            </StyledLink>
          </Div>
        ) : null}
      </Div>
    );
  }
}

export default UserPanel;
