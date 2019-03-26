import React from 'react';
import { connect } from "react-redux";
import TableComponent from '../components/TableComponent'

class ActivityFeed extends React.Component {

render(){
const {props} = this;

 return(
  <div className="view-wrapper activefeed-main">
  <TableComponent tableData={props.tableData} />
  </div>

 )
}

}

function mapStateToProps(state) {
  return {
    tableData: state.Activityfeed.tableData,

  };
}

export default connect(mapStateToProps) (ActivityFeed);
