import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 1rem 1rem;
  text-align: center;
`;

export const P = styled.p`
  color: ${props => (props.pStyles ? props.pStyles.main.color : "")};
  font-weight: ${props => (props.pStyles ? props.pStyles.main.fontWeight : "")};
  width: ${props => (props.pStyles ? props.pStyles.main.width : "")};
  height: ${props => (props.pStyles ? props.pStyles.main.height : "")};
  margin: ${props => (props.pStyles ? props.pStyles.main.margin : "")};
  margin-top: ${props => (props.pStyles ? props.pStyles.main.marginTop : "")};
  height: ${props => (props.pStyles ? props.pStyles.main.height : "")};
  display: ${props => (props.pStyles ? props.pStyles.main.display : "")};
  align-items: ${props => (props.pStyles ? props.pStyles.main.alignItems : "")};
  justify-items: ${props =>
    props.pStyles ? props.pStyles.main.justifyItems : ""};
  font-size: ${props => (props.pStyles ? props.pStyles.main.fontSize : "")};
`;

export const Img = styled.img`
  width: ${props => (props.imgStyles ? props.imgStyles.main.width : "")};
  height: ${props => (props.imgStyles ? props.imgStyles.main.height : "")};
  margin: ${props => (props.imgStyles ? props.imgStyles.main.margin : "")};
  margin-top: ${props =>
    props.imgStyles ? props.imgStyles.main.marginTop : ""};
  margin-left: ${props =>
    props.imgStyles ? props.imgStyles.main.marginLeft : ""};
  margin-bottom: ${props =>
    props.imgStyles ? props.imgStyles.main.marginBottom : ""};
  height: ${props => (props.imgStyles ? props.imgStyles.main.height : "")};
  display: ${props => (props.imgStyles ? props.imgStyles.main.display : "")};
  align-self: ${props =>
    props.imgStyles ? props.imgStyles.main.alignSelf : ""};
  align-items: ${props =>
    props.imgStyles ? props.imgStyles.main.alignItems : ""};
  justify-items: ${props =>
    props.imgStyles ? props.imgStyles.main.justifyItems : ""};
  justify-content: ${props =>
    props.imgStyles ? props.imgStyles.main.justifyContent : ""};
  border-radius: ${props =>
    props.imgStyles ? props.imgStyles.main.borderRadius : ""};
  border: ${props => (props.imgStyles ? props.imgStyles.main.border : "")};
  box-shadow: ${props =>
    props.imgStyles ? props.imgStyles.main.boxShadow : ""};
  transition: ${props =>
    props.imgStyles ? props.imgStyles.main.transition : ""};
  &:hover {
    transform: ${props =>
      props.imgStyles ? props.imgStyles.main.transform : ""};
    cursor: ${props => (props.imgStyles ? props.imgStyles.main.cursor : "")};
  }
`;

export const Form = styled.form``;
export const Span = styled.span`
  display: ${props => (props.spanStyles ? props.spanStyles.main.display : "")};
  margin: ${props => (props.spanStyles ? props.spanStyles.main.margin : "")};
  margin-bottom: ${props =>
    props.spanStyles ? props.spanStyles.main.marginBottom : ""};
  font-size: ${props =>
    props.spanStyles ? props.spanStyles.main.fontSize : ""};
  font-weight: ${props =>
    props.spanStyles ? props.spanStyles.main.fontWeight : ""};
  color: ${props => (props.spanStyles ? props.spanStyles.main.color : "")};

  ${props =>
    props.marginleft &&
    css`
      margin-left: 0.5rem;
    `};

  ${props =>
    props.marginleft1 &&
    css`
      margin-left: 1rem;
    `};
`;

export const Grid = styled.div`
  display: ${props => (props.divStyles ? props.divStyles.main.display : "")};
  grid-template-columns: ${props =>
    props.divStyles ? props.divStyles.main.gridTemplateColumns : ""};
  grid-template-rows: ${props =>
    props.divStyles ? props.divStyles.main.gridTemplateRows : ""};
  grid-gap: ${props => (props.divStyles ? props.divStyles.main.gridGap : "")};
  grid-column-gap: ${props =>
    props.divStyles ? props.divStyles.main.gridColumnGap : ""};
  grid-row-gap: ${props =>
    props.divStyles ? props.divStyles.main.gridRowGap : ""};
  align-items: ${props =>
    props.divStyles ? props.divStyles.main.alignItems : ""};
  justify-items: ${props =>
    props.divStyles ? props.divStyles.main.justifyItems : ""};
`;

export const Div = styled.div`
  text-decoration: none;
  margin: ${props => (props.divStyles ? props.divStyles.main.margin : "")};
  margin-top: ${props =>
    props.divStyles ? props.divStyles.main.marginTop : ""};
  margin-bottom: ${props =>
    props.divStyles ? props.divStyles.main.marginBottom : ""};
  margin-right: ${props =>
    props.divStyles ? props.divStyles.main.marginRight : ""};
  width: ${props => (props.divStyles ? props.divStyles.main.width : "")};
  background-color: ${props =>
    props.divStyles ? props.divStyles.main.background : ""};
  text-align: ${props =>
    props.divStyles ? props.divStyles.main.textAlign : ""};
  padding: ${props => (props.divStyles ? props.divStyles.main.padding : "")};
  border-radius: ${props =>
    props.divStyles ? props.divStyles.main.borderRadius : ""};
  border: ${props => (props.divStyles ? props.divStyles.main.border : "")};
  box-shadow: ${props =>
    props.divStyles ? props.divStyles.main.boxShadow : ""};
  color: ${props => (props.divStyles ? props.divStyles.main.textColor : "")};
  font-size: ${props => (props.divStyles ? props.divStyles.main.fontSize : "")};
  font-weight: ${props =>
    props.divStyles ? props.divStyles.main.fontWeight : ""};
  height: ${props => (props.divStyles ? props.divStyles.main.height : "")};
  display: ${props => (props.divStyles ? props.divStyles.main.display : "")};
  align-items: ${props =>
    props.divStyles ? props.divStyles.main.alignItems : ""};
  justify-items: ${props =>
    props.divStyles ? props.divStyles.main.justifyItems : ""};
  align-content: ${props =>
    props.divStyles ? props.divStyles.main.alignContent : ""};
  justify-content: ${props =>
    props.divStyles ? props.divStyles.main.justifyContent : ""};
  flex-flow: ${props => (props.divStyles ? props.divStyles.main.flexFlow : "")};
  cursor: ${props => (props.divStyles ? props.divStyles.main.cursor : "")};
  z-index: ${props => (props.divStyles ? props.divStyles.main.zIndex : "")};
  position: ${props => (props.divStyles ? props.divStyles.main.position : "")};
  top: ${props => (props.divStyles ? props.divStyles.main.top : "")};
  left: ${props => (props.divStyles ? props.divStyles.main.left : "")};
  transition: ${props =>
    props.divStyles ? props.divStyles.main.transition : ""};

  &:hover {
    background: ${props =>
      props.divStyles ? props.divStyles.main.hoverBackground : ""};
  }
`;

export const StyledLink = styled.a`
  display: ${props => (props.linkStyles ? props.linkStyles.main.display : "")};
  position: ${props =>
    props.linkStyles ? props.linkStyles.main.position : ""};
  font-weight: ${props =>
    props.linkStyles ? props.linkStyles.main.fontWeight : ""};
  font-size: ${props =>
    props.linkStyles ? props.linkStyles.main.fontSize : ""};
  width: ${props => (props.linkStyles ? props.linkStyles.main.width : "")};
  border-radius: ${props =>
    props.linkStyles ? props.linkStyles.main.borderRadius : ""};
  background: ${props =>
    props.linkStyles ? props.linkStyles.main.background : ""};
  padding: ${props => (props.linkStyles ? props.linkStyles.main.padding : "")};
  box-shadow: ${props =>
    props.linkStyles ? props.linkStyles.main.boxShadow : ""};
  color: ${props =>
    props.linkStyles ? props.linkStyles.main.textColor : "fbbc05"};
  text-decoration: none;
  transition: ${props =>
    props.linkStyles ? props.linkStyles.main.transition : ""};
  &:hover {
    cursor: pointer;
    background: #eaeaea;
  }
  z-index: ${props => (props.linkStyles ? props.linkStyles.main.zIndex : "")};
  position: ${props =>
    props.linkStyles ? props.linkStyles.main.position : ""};
  top: ${props => (props.linkStyles ? props.linkStyles.main.top : "")};
  left: ${props => (props.linkStyles ? props.linkStyles.main.left : "")};
  overflow: hidden;
`;

export const Button = styled.button``;

export const RegisterContainer = styled.div`
  width: 400px;
  padding: 1rem 0;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  border: 1px solid #ddd;
  background: #fff;
  -moz-box-shadow: 0 0 10px #e0e0e0;
  -webkit-box-shadow: 0 0 10px #e0e0e0;
  box-shadow: 0 0 8px #e0e0e0;
`;

export const AddChannelInput = styled.input`
  width: ${props => (props.inputStyles ? props.inputStyles.main.width : "")};
  height: ${props => (props.inputStyles ? props.inputStyles.main.height : "")};
  border-radius: ${props =>
    props.inputStyles ? props.inputStyles.main.borderRadius : ""};
  display: ${props =>
    props.inputStyles ? props.inputStyles.main.display : ""};
  padding: ${props =>
    props.inputStyles ? props.inputStyles.main.padding : ""};
  font-size: ${props =>
    props.inputStyles ? props.inputStyles.main.fontSize : ""};
  border: ${props => (props.inputStyles ? props.inputStyles.main.border : "")};

  &::-webkit-input-placeholder {
    color: #c2c2c2;
  }

  ${props =>
    props.inputStyles.error && css
      ? `
        background-color: #eeb4b4;
        &:focus {
          border: 1px solid #e79494;
          box-shadow: 0 0 5px #e79494;
          outline: none;
          background-color: #eeb4b4;
        }

        ,
        &::-webkit-input-placeholder {
          color: #fff;
        }

        &:select {
          border: 3px solid #c2c2c2;
        }
      `
      : `
      &:focus {
        border: 1px solid #4285f4;
        box-shadow: 0 0 8px #88d5e9;
        outline: none;
      }

      &:select {
        border: 3px solid #c2c2c2;
      }

      &::-webkit-input-placeholder {
        color: #c2c2c2;
      }
      `};

  ${props =>
    props.marginbottom &&
    css`
      margin-bottom: 0.5rem;
    `};

  ${props =>
    props.marginbottom1 &&
    css`
      margin-bottom: 1rem;
    `};
`;

export const Input = styled.input`
  border-radius: ${props => (props.inputStyles ? "5px" : "5px")};
  padding: 0.75rem 0.75rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  // border-radius: 5px;
  font-size: 16px;
  &::-webkit-input-placeholder {
    color: #c2c2c2;
  }
  // border: 1px solid #ddd;

  border: ${props =>
    props.inputStyles ? "1px solid #e79494" : "1px solid #ddd"};

  ${props =>
    props.inputStyles && css
      ? `
        background-color: #eeb4b4;
        &:focus {
          border: 1px solid #e79494;
          box-shadow: 0 0 5px #e79494;
          outline: none;
          background-color: #eeb4b4;
        }

        ,
        &::-webkit-input-placeholder {
          color: #fff;
        }

        &:select {
          border: 3px solid #c2c2c2;
        }
      `
      : `
      &:focus {
        border: 1px solid #4285f4;
        box-shadow: 0 0 5px #88d5e9;
        outline: none;
      }

      &:select {
        border: 3px solid #c2c2c2;
      }

      &::-webkit-input-placeholder {
        color: #c2c2c2;
      }
      `};

  ${props =>
    props.marginbottom &&
    css`
      margin-bottom: 0.5rem;
    `};

  ${props =>
    props.submit &&
    css`
      background: #4285f4;
      padding: 0.5rem 0;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      &:hover {
        opacity: 0.95;
      }
    `};
`;

export const MarginBottom = styled.div`
  margin-bottom: 1rem;

  ${props =>
    props.half &&
    css`
      margin-bottom: 0.5rem;
    `};

  ${props =>
    props.two &&
    css`
      margin-bottom: 1.5rem;
    `};

  ${props =>
    props.three &&
    css`
      margin-bottom: 2rem;
    `};
`;
