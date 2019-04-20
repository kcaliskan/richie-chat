import React from "react";
import {
  Img,
  Container,
  RegisterContainer,
  Input,
  MarginBottom,
  Div,
  Form
} from "../Style";
import { Link } from "react-router-dom";
import "../App.css";
import firebase from "../../firebase";
import md5 from "md5";

// Styled components
const myStyles = {
  main: {
    width: "400px;",
    margin: "0 auto",
    textAlign: "center;",
    background: "#F3F3F3;",
    padding: "0.75rem 0;",
    borderRadius: "5px;",
    border: "1px solid #ddd;"
  }
};

const errorDivStyle = {
  main: {
    width: "400px",
    margin: "0 auto",
    textAlign: "center",
    background: "#FF6A6A",
    padding: "0.5rem 0",
    fontSize: "16px",
    textColor: "#FFF",
    fontWeight: "500",
    borderRadius: "5px;",
    border: "1px solid #ddd;",
    marginBottom: "1rem"
  }
};

const logoStyle = {
  main: {
    width: "180px",
    margin: "0 auto"
  }
};

const warningImgStyle = {
  main: {
    width: "32px"
  }
};

const loadingImgStyle = {
  main: {
    margin: "0 auto",
    marginTop: "0.5rem"
  }
};

const registerStyles = {
  main: {
    width: "400px",
    margin: "0 auto",
    textAlign: "center",
    background: "#fafafa",
    padding: "0.75rem 0",
    fontSize: "36px",
    textColor: "#4285f4",
    fontWeight: "700;"
  }
};

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users")
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      // throw error
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      // throw error
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      // form valid
      return true;
    }
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  displayErrors = errors =>
    errors.map((error, i) => (
      <p key={i} className="warningPstyle">
        <Img src={`../../img/warning.png`} imgStyles={warningImgStyle} />
        <span className="pl-1">{error.message}</span>
      </p>
    ));

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          createdUser.user
            .updateProfile({
              displayName: this.state.username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createdUser.user.email
              )}?d=identicon`
            })
            .then(() => {
              this.saveUser(createdUser).then(() => {});
            })
            .catch(err => {
              this.setState({
                errors: this.state.errors.concat(err),
                loading: false
              });
              console.log(err);
            });
        })
        .catch(err => {
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
          console.log(err);
        });
    }
  };

  saveUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  };

  handleInputError = (errors, inputName) => {
    return errors.some(error =>
      error.message.toLowerCase().includes(inputName)
    );
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      loading
    } = this.state;

    return (
      <Container>
        <Img imgStyles={logoStyle} src={`../../img/logo.png`} />
        <Div divStyles={registerStyles}>Register for Richie Chat</Div>

        {errors.length > 0 && (
          <Div divStyles={errorDivStyle}>{this.displayErrors(errors)}</Div>
        )}

        <RegisterContainer>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              marginbottom
              onChange={this.handleChange}
              value={username}
              inputStyles={
                this.handleInputError(errors, "username") ||
                this.handleInputError(errors, "field")
              }
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              marginbottom
              onChange={this.handleChange}
              value={email}
              inputStyles={
                this.handleInputError(errors, "email") ||
                this.handleInputError(errors, "field")
              }
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              marginbottom
              onChange={this.handleChange}
              value={password}
              inputStyles={
                this.handleInputError(errors, "password") ||
                this.handleInputError(errors, "field")
              }
            />
            <Input
              type="password"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              marginbottom
              onChange={this.handleChange}
              value={passwordConfirmation}
              inputStyles={
                this.handleInputError(errors, "password") ||
                this.handleInputError(errors, "field")
              }
            />
            {loading ? (
              <Img imgStyles={loadingImgStyle} src="../../img/spinner.gif" />
            ) : (
              <Input type="submit" name="submit" value="Submit" submit />
            )}
          </Form>
        </RegisterContainer>
        <MarginBottom />
        <Div divStyles={myStyles}>
          Already a user?
          <Link to="/login" className="aLink pl-1">
            Login
          </Link>
        </Div>
      </Container>
    );
  }
}

export default Register;
