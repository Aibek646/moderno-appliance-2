import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Navbar from "../../Components/Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
