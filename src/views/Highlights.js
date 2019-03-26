import React from 'react';
import { connect } from "react-redux";
import HighlightsStatBlock from '../components/HighlightsStatBlock';

class Highlights extends React.Component {

   render() {
      const { props } = this;
      return (
         <div className="view-wrapper highlights-main">
            <HighlightsStatBlock blockValues={props.highlightData} />
         </div>
      )
   }

}

function mapStateToProps(state) {
   return {
      highlightData: state.Highlights.highlightData,

   };
}

export default connect(mapStateToProps)(Highlights);
