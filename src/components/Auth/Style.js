import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 1rem 1rem;
  text-align: center;
`;

export const Img = styled.img`
  width: ${props => (props.imgStyles ? props.imgStyles.main.width : "")};
  margin: ${props => (props.imgStyles ? props.imgStyles.main.margin : "")};
  margin-top: ${props =>
    props.imgStyles ? props.imgStyles.main.marginTop : ""};
`;

export const Form = styled.form``;

export const Div = styled.div`
  text-decoration: none;
  margin: ${props => (props.divStyles ? props.divStyles.main.margin : "")};
  margin-bottom: ${props =>
    props.divStyles ? props.divStyles.main.marginBottom : ""};
  width: ${props => (props.divStyles ? props.divStyles.main.width : "")};
  background-color: #${props => (props.divStyles ? props.divStyles.main.background : "")};
  text-align: ${props =>
    props.divStyles ? props.divStyles.main.textAlign : ""};
  padding: ${props => (props.divStyles ? props.divStyles.main.padding : "")};
  border-radius: ${props =>
    props.divStyles ? props.divStyles.main.borderRadius : ""};
  border: ${props => (props.divStyles ? props.divStyles.main.border : "")};
  color: #${props => (props.divStyles ? props.divStyles.main.textColor : "")};
  font-size: ${props => (props.divStyles ? props.divStyles.main.fontSize : "")};
  font-weight: ${props =>
    props.divStyles ? props.divStyles.main.fontWeight : ""};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #fbbc05;
  &:hover {
    color: #ca9703;
  }
`;

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
