import React, { Component } from "react";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import { Grid, Div } from "./Style";

//Styled Components
const gridDivStyle = {
  main: {
    display: "grid;",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "minmax(100vh, max-content)"
  }
};

class App extends React.Component {
  render() {
    return (
      <Grid divStyles={gridDivStyle}>
        <ColorPanel />
        <SidePanel />
        <Messages />
        <MetaPanel />
      </Grid>
    );
  }
}

export default App;
