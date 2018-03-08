import React, { PureComponent } from 'react';
import { Input, Avatar, Button, Row, Col, Divider } from 'antd';

const { TextArea } = Input;

class CommentWrite extends PureComponent {
  state = {
    content: '',
  }
  handleChange(e) {
    this.setState({ content: e.target.value });
  }
  // 增加评论
  addComment() {
    if (!this.state.content) {
      return false;
    }
    const comment = {
      content: this.state.content,
      username: this.props.username,
      moment: new Date().getTime(),
    };
    this.props.dispatch({
      type: 'home/e_updateComment',
      payload: comment,
    });
    // 删除当前TextArea内的内容
    this.setState({ content: '' });
  }
  render() {
    return (
      <div>
        <Row>
          <span style={{ fontSize: 16, fontWeight: 'bold' }}> 欢迎留言 </span>
          <Divider />
        </Row>
        <Row>
          <Col style={{ fontSize: 16, fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span> 共 {this.props.comments.length} 条评论</span>
            <span>{this.props.username}</span>
          </Col>
          <Divider />
        </Row>
        <Row gutter={16}>
          <Col span={2} style={{ textAlign: 'right' }} >
            <Avatar shape="square" size="large" icon="user" />
          </Col>
          <Col span={22} style={{ textAlign: 'right', padding: 0 }}>
            <TextArea rows={4} value={this.state.content} onChange={this.handleChange.bind(this)} />
            <Button style={{ margin: '8px 0' }} onClick={this.addComment.bind(this)}> 评论 </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentWrite;

