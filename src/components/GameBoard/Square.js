import React, { PureComponent } from 'react';
import Style from './Square.css';


class Square extends PureComponent {
  render() {
    return (
      <div className={`${Style.tile} ${Style[`tile-${this.props.num}`]} ${Style[this.props.pos]} `}>
        {this.props.num}
      </div>
    );
  }
}
export default Square;
