import React from "react";
import { Div, Img, MarginBottom } from "../Style";

const wrapperDivStyle = {
  main: {
    display: "flex",
    justifyContent: "center",
    background: "#0F1627"
  }
};

const addButtonImgStyle = {
  main: {
    display: "block",
    height: "38px",
    width: "38px",
    margin: "1rem auto",
    cursor: "pointer"
  }
};

class ColorPanel extends React.Component {
  render() {
    return (
      <Div divStyles={wrapperDivStyle}>
        <MarginBottom />
        <Img
          src={`../../img/add-button-64.png`}
          imgStyles={addButtonImgStyle}
        />
      </Div>
    );
  }
}

export default ColorPanel;
