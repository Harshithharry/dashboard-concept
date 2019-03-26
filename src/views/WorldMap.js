import React, {Component} from 'react';
import { connect } from "react-redux";
import Chart from "react-google-charts";




class WorldMap extends Component {

render(){
const {props} = this;
 return(
   <div className="view-wrapper worldmap-main">
<div className="world-map">
    <Chart chartType="GeoChart" width="100%" height="400px" data={props.mapData} />
    </div>
   </div>

 )
}

}
function mapStateToProps(state) {
  return {
     mapData: state.Worldmap.mapData,

  };
}

export default connect(mapStateToProps)(WorldMap);

