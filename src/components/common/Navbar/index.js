import React from "react";
import { Navbar } from "react-bootstrap";

import "./index.scss";

const Index = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        aria-label="Navigation - small"
        id="smallNav"
      >
        <Navbar.Brand
          aria-label="Automative Interview Challenge"
          data-testid="nav-brand"
        >
          <div style={{ fontSize: "26px" }}>Automative Interview Challenge</div>
        </Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default Index;
