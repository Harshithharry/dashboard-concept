import React, { Component } from "react";
import SideNavbar from "./views/sidebar";
import Header from "./views/Header";
import Container from "./views/layouts";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showSidebar: true };
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu = function() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    return (
      <div className="main-wrapper">
      <SideNavbar showSidebar={this.state.showSidebar} />
      <Header toggleMenu={this.toggleMenu} />
      
      <Container showSidebar={this.state.showSidebar} />


    </div>
    );
  }
}
export default  App;
