import React, { PureComponent } from 'react';
import { Input, Avatar, Button, Row, Col, Divider } from 'antd';

const { TextArea } = Input;

class CommentWrite extends PureComponent {

  render() {
    return (
      <div>
        <Row>
          <span style={{ fontSize: 16, fontWeight: 'bold' }}> 欢迎留言 </span>
          <Divider />
        </Row>
        <Row>
          <Col style={{ fontSize: 16, fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span> 共 29 条评论</span>
            <span>duanbowen</span>
          </Col>
          <Divider />
        </Row>
        <Row gutter={16}>
          <Col span={2} style={{ textAlign: 'right' }} >
            <Avatar shape="square" size="large" icon="user" />
          </Col>
          <Col span={22} style={{ textAlign: 'right' }}>
            <TextArea rows={4} />
            <Button style={{ marginTop: 8 }}> 评论 </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentWrite;

