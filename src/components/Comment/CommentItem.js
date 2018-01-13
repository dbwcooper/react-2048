import React, { PureComponent } from 'react';
import { Input, Avatar, Button, Row, Col } from 'antd';

const { TextArea } = Input;

class CommentItem extends PureComponent {

  render() {
    return (
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={2} style={{ textAlign: 'right' }} >
          <Avatar shape="square" size="large" icon="user" />
        </Col>
        <Col span={22}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <span>duanbowen 发表于  1天前 </span>
            <span> 回复</span>
          </div>
                <p style={{ margin: '8px 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        </Col>
      </Row>
    );
  }
}

export default CommentItem;

