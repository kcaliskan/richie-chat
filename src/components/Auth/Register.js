import React from "react";
import {
  Logo,
  Container,
  RegisterContainer,
  Input,
  MarginBottom,
  Div,
  StyledLink,
  Form
} from "./Style";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    const myStyles = {
      main: {
        width: "400px;",
        margin: "0 auto;",
        textAlign: "center;",
        background: "F3F3F3;",
        padding: "0.75rem 0;",
        borderRadius: "5px;",
        border: "1px solid #ddd;"
      }
    };

    const registerStyles = {
      main: {
        width: "400px",
        margin: "0 auto",
        textAlign: "center",
        background: "fafafa",
        padding: "0.75rem 0",
        fontSize: "36px",
        textColor: "4285f4",
        fontWeight: "700;"
      }
    };

    return (
      <Container>
        <Logo src={`https://image.flaticon.com/icons/svg/1592/1592325.svg`} />
        <MarginBottom />
        <Div divStyles={registerStyles}>Register for Richie Chat</Div>
        <MarginBottom />
        <RegisterContainer>
          <Form>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              marginbottom
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              marginbottom
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              marginbottom
            />
            <Input
              type="password"
              name="passwordconfirm"
              placeholder="Password Confirmation"
              marginbottom
            />
            <Input type="submit" name="submit" value="Submit" submit />
          </Form>
        </RegisterContainer>
        <MarginBottom />
        <Div divStyles={myStyles}>
          Already a user?{" "}
          <Link to="/login">
            <StyledLink>Login</StyledLink>
          </Link>
        </Div>
      </Container>
    );
  }
}

export default Register;
