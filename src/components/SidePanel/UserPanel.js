import React from "react";
import firebase from "../../firebase";

class UserPanel extends React.Component {
  state = {
    showMenu: false
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
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("nanik");
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Show menu</button>

        {this.state.showMenu ? (
          <div className="menu">
            <button className="menu-item">Menu item 1</button>
            <button className="menu-item">Menu item 2</button>
            <button className="menu-item" onClick={this.signOutHandle}>
              Log Out
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UserPanel;
