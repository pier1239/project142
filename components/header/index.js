import React, { Component } from "react";
import Link from "next/link";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
  <div className="topmenu">
  	      <Link href="/">
          <a title="Our API">Home</a>
          </Link>
          <Link href="/about">
          <a title="About Next JS">About Next JS</a>
          </Link>
  </div>
    );
  }
}

export default Navbar;
