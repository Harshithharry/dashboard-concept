import React, { Component } from "react";
import ViewRoutes from "../routes";



class Container extends Component {
  render() {
    let containerClass = this.props.showSidebar ? 'view-Container' : 'view-Container sidebar-closed';
    return (
      <div className={containerClass}>
      <ViewRoutes />
      </div>
  );
  }
}
export default  Container;
