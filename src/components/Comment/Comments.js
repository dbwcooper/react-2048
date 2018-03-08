import React, { PureComponent } from 'react';
import { connect } from 'dva';
import CommentWrite from './CommentWrite';
import CommentItem from './CommentItem';

class Comments extends PureComponent {
  getComments() {
    return this.props.comments.map((comment, index) => {
      return (<CommentItem key={index} comment={comment} />);
    });
  }
  render() {
    return (
      <div style={{ margin: '0 20% 0 15%' }}>
        <CommentWrite {...this.props} />
        {this.getComments()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state.home || {};
}
export default connect(mapStateToProps)(Comments);
