import React from "react";
import {
  Div,
  Grid,
  Img,
  P,
  Form,
  Span,
  AddChannelInput,
  Button,
  Ul,
  Li,
  MarginBottom,
  StyledLink,
  SearchInput
} from "../Style";

const wrapperDivStyle = {
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr);",
    gridTemplateRows: "minmax(max-content, 2fr);",
    background: "#FFF",
    margin: "1rem 1rem",
    padding: "1rem 1rem",
    borderRadius: "5px",
    border: "1px solid #ededed",
    boxShadow: "1px 2px #ededed;"
  }
};

const channelNameDivStyle = {
  main: {
    fontSize: "30px;",
    fontWeight: "700;",
    display: "flex",
    alignContent: "center",
    marginBottom: "0.5rem"
  }
};

const channelFavIcon = {
  main: {
    display: "inline-block",
    height: "30px",
    width: "30px",
    marginLeft: "0.25rem"
  }
};

const channelNameStyle = {
  main: {
    display: "inline-block"
  }
};

const channelUsersDivStyle = {
  main: {
    textColor: "#717171",
    fontWeight: "700",
    fontSize: "16px"
  }
};

const searchIconStyle = {
  main: {
    display: "block",
    width: "24px",
    position: "absolute",
    top: "10px",
    left: "225px"
  }
};

const searchInputWrapperDiv = {
  main: {
    position: "relative",
    width: "260px",
    marginLeft: "auto"
  }
};

const searchInputStyle = {
  main: {
    width: "260px"
  }
};

class MessagesHeader extends React.Component {
  render() {
    return (
      <Grid divStyles={wrapperDivStyle}>
        <Div divStyles={channelNameDivStyle}>
          <Span spanStyle={channelNameStyle}>Food</Span>
          <Img src={`../../img/fav-black-64.png`} imgStyles={channelFavIcon} />
        </Div>
        <Div>
          <Div divStyles={searchInputWrapperDiv}>
            <Img src={`../../img/search-64.png`} imgStyles={searchIconStyle} />
            <SearchInput
              type="text"
              name="messageSearch"
              placeholder="Search Messages"
              inputStyles={searchInputStyle}
            />
          </Div>
        </Div>
        <Div divStyles={channelUsersDivStyle}>2 Users</Div>
        <Div />
      </Grid>
    );
  }
}

export default MessagesHeader;
