import React from "react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import { Div } from "../Style";

//Styled Components
const customDivStyle = {
  main: {
    background: "#4285f4"
  }
};

class SidePanel extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Div divStyles={customDivStyle}>
        SidePanel
        <UserPanel user={user} />
        <Channels user={user} />
      </Div>
    );
  }
}

export default SidePanel;
