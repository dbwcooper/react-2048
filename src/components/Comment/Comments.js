import React, { PureComponent } from 'react';
import { connect } from 'dva';
import CommentWrite from './CommentWrite';
import CommentItem from './CommentItem';

class Comments extends PureComponent {
  render() {
    return (
      <div style={{ margin: '0 20% 0 15%' }}>
        <CommentWrite />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state.comments;
}
export default connect(mapStateToProps)(Comments);
