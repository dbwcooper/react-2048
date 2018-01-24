import React, { PureComponent } from 'react';
import { Modal } from 'antd';

class Person extends PureComponent {
  state = {
    visible: true,
  }
  handleOk() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <Modal
        title="用户信息"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleOk}
      >
        <p>Some contents...</p>
      </Modal>
    );
  }
}

export default Person;
