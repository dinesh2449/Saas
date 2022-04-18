// frontent/src/components/Home.js
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Welcome to my new Website</h1>
        <p>
          <Link to="/login/">Login</Link>
        </p>
        <p>
          <Link to="/signup">Sign up</Link>
        </p>
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
      </Container>
    );
  }
}

export default Home;