import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form } from 'antd';

class Person extends PureComponent {
  handleOk() {
    this.props.dispatch({
      type: 'home/r_updateLogin',
    });
  }
  render() {
    return (
      <p>Some contents...</p>
    );
  }
}

function mapStateToProps(state) {
  return state.home;
}
export default connect(mapStateToProps)(Person);
