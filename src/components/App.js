import React from "react";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import { Grid } from "./Style";
import { connect } from "react-redux";

//Styled Components
const gridDivStyle = {
  main: {
    display: "grid;",
    gridTemplateColumns: "1fr 4fr 10fr 4fr",
    // gridTemplateColumns: "3vw 13vw 65vw 19vw",
    gridTemplateRows: "minmax(100vh, max-content)"
  }
};

class App extends React.Component {
  render() {
    const { user, channel } = this.props;
    return (
      <Grid divStyles={gridDivStyle}>
        <ColorPanel />
        <SidePanel user={user} key={user && user.uid} />
        <Messages user={user} channel={channel} key={channel && channel.id} />
        <MetaPanel />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    channel: state.channel.currentChannel
  };
};

export default connect(mapStateToProps)(App);
