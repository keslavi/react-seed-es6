import React, { useEffect } from 'react';
//import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

//Initial set up of Store Items, other initial settings
const InitState = (props) => {
  useEffect(() => {
    //TODO: add items as needed

  })

  return (<div className='hidden'>InitState</div>);
}

const mapStateToProps = (state) => {
  return {
    user: {}, //TODO:get the user profile, auth going
    options: {},//TODO: get the options loading (after auth)
  }
}

export default connect(mapStateToProps, {

})(InitState);
//})(withRouter(InitState));


