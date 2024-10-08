// components/NavigationBar.js
import React from "react";
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
  return (
    <nav class="navbar navbar-light bg-light static-top">
      <div class="container">
        <a class="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <a class="btn btn-primary" href="#signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
