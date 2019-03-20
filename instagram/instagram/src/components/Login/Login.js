import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          onChange={this.handleChange}
          name="username"
          type="text"
          placeholder="User Name"
          value={this.state.username}
        />
        <input
          onChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
