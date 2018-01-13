import React, { PureComponent } from 'react';
import CommentWrite from './CommentWrite';
import CommentItem from './CommentItem';

class Comments extends PureComponent {
  render() {
    return (
      <div style={{ margin: '0 20% 0 15%' }}>
        <CommentWrite />
        <CommentItem />
      </div>
    );
  }
}
export default Comments;
