import React from "react";
import { Img, Div, P } from "./Auth/Style";

// Styled components
const spinnerDivStyle = {
  main: {
    height: "100vh;",
    display: "flex;",
    margin: "0 auto",
    background: "FFF;",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column"
  }
};

const loadingImgStyle = {
  main: {
    width: "64px",
    height: "64px",
    marginBottom: "1.5rem"
  }
};

const spinnerPStyle = {
  main: {
    fontSize: "20px"
  }
};

const Spinner = () => {
  return (
    <Div divStyles={spinnerDivStyle}>
      <Img imgStyles={loadingImgStyle} src="../../img/spinner-64.gif" />
      <P pStyles={spinnerPStyle}>Loading...</P>
    </Div>
  );
};

export default Spinner;
