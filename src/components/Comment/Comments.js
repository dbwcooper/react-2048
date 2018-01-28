import React, { PureComponent } from 'react';
import { connect } from 'dva';
import CommentWrite from './CommentWrite';
import CommentItem from './CommentItem';

class Comments extends PureComponent {
  state = {
    name: 'duanbowen',
  }
  onReplay(replayName) {
    this.props.dispatch({
      type: 'home/r_updateCommentWrite',
      payload: { replayName },
    });
  }
  getComments() {
    return this.props.comments.map((comment, index) => {
      return (<CommentItem key={index} comment={comment} onReplay={this.onReplay.bind(this)} />);
    });
  }
  render() {
    return (
      <div style={{ margin: '0 20% 0 15%' }}>
        <CommentWrite {...this.props} replayName={this.props.commentWrite.replayName} />
        {this.getComments()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state.home || {};
}
export default connect(mapStateToProps)(Comments);
