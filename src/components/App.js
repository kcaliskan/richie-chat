import React, { Component } from "react";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import { Grid, Div } from "./Style";
import { connect } from "react-redux";

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
    const { user } = this.props;
    return (
      <Grid divStyles={gridDivStyle}>
        <ColorPanel />
        <SidePanel user={user} />
        <Messages />
        <MetaPanel />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user.currentUser };
};

export default connect(mapStateToProps)(App);
