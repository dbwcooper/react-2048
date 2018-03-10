import React, { PureComponent } from 'react';
import { Avatar, Row, Col } from 'antd';

class CommentItem extends PureComponent {
  state = {
    moment: formatTime(new Date().getTime() - this.props.comment.moment),
  }
  render() {
    return (
      <div>
        <Row gutter={16} style={{ paddingTop: 16 }}>
          <Col span={2} style={{ textAlign: 'right' }} >
            <Avatar shape="square" size="large" icon="user" />
          </Col>
          <Col span={22} style={{ backgroundColor: '#f0f2f5', borderRadius: '5px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
              <span> <a> {this.props.comment.username} </a> 发表于 {this.state.moment} </span>
            </div>
            <p style={{ fontSize: 16 }}>
              {this.props.comment.content}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentItem;

let formatTime = (substract) => {
  if (substract > 86400000) {
  // 向下取整
    return `${Math.floor(substract / 86400000)}天前`;
  } else if (substract > 3600000) {
    return `${Math.floor(substract / 3600000)}小时前`;
  } else {
    return '1小时内';
  }
};

