import React from "react";
import UserPanel from "./UserPanel";
import { Div } from "../Style";

//Styled Components
const customDivStyle = {
  main: {
    background: "4285f4"
  }
};

class SidePanel extends React.Component {
  render() {
    return (
      <Div divStyles={customDivStyle}>
        SidePanel
        <UserPanel />
      </Div>
    );
  }
}

export default SidePanel;
