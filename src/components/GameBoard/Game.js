import React, { PureComponent } from 'react';
import { Button, Icon, Row } from 'antd';
import { connect } from 'dva';
import Style from './Game.css';
import Square from './Square';

const keyUp = 38;
const keyRight = 39;
const keyDown = 40;
const keyLeft = 37;
// wsad  上下左右
const keyW = 87;
const keyS = 83;
const keyA = 65;
const keyD = 68;
// n -> new game
const keyN = 78;
class Game extends PureComponent {

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyHandle); // eslint-disable-line
    // document.addEventListener('keydown', this.onKeyHandle, false); // eslint-disable-line
  }
  // 在当前组件被销毁时同时删除监听事件
  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyHandle, false); // eslint-disable-line
    // document.removeEventListener('keydown', this.onKeyHandle, false); // eslint-disable-line
  }
  onKeyHandle(e) {
    switch (e.keyCode) {
      case keyW:
      case keyUp:
        this.handleMoveUp();
        break;
      case keyS:
      case keyDown:
        this.handleMoveDown();
        break;
      case keyA:
      case keyLeft:
        this.handleMoveLeft();
        break;
      case keyD:
      case keyRight:
        this.handleMoveRight();
        break;
      case keyN:
        this.props.onReset();
        break;
      default:
        break;
    }
  }
  // 上移
  handleMoveUp() {
    this.props.dispatch({
      type: 'game/r_MoveUp',
    });
  }
  // 下移动
  handleMoveDown() {
    this.props.dispatch({
      type: 'game/r_MoveDown',
    });
  }
  // 左移动
  handleMoveLeft() {
    this.props.dispatch({
      type: 'game/r_MoveLeft',
    });
  }
  // 右移动
  handleMoveRight() {
    this.props.dispatch({
      type: 'game/r_MoveRight',
    });
  }
  render() {
    return (
      <div className={Style.container}>
        <div className={Style['game-container']}>
          <div>
            <div className={Style['gird-row']}>
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
            </div>
            <div className={Style['gird-row']}>
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
            </div><div className={Style['gird-row']}>
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
            </div><div className={Style['gird-row']}>
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
              <div className={Style['gird-col']} />
            </div>
          </div>
          <div className={Style['tile-container']}>
            <Square num={2} pos={'tile-pos-0-0'} />
            <Square num={4} pos={'tile-pos-1-0'} />
            <Square num={8} pos={'tile-pos-2-2'} />
            <Square num={16} pos={'tile-pos-3-2'} />
            <Square num={16} pos={'tile-pos-3-0'} />
            <Square num={16} pos={'tile-pos-2-1'} />
            <Square num={16} pos={'tile-pos-3-3'} />
          </div>
        </div>

        <div className={Style.operation}>
          <div className={Style.scores}>
            <div className={Style.score}>
              <span className={Style['score-num']}>得分</span>
              <span className={Style['score-num']}>4</span>
            </div>
            <div className={Style.score}>
              <span className={Style['score-num']}>最佳</span>
              <span className={Style['score-num']}>4</span>
            </div>
          </div>
          <div className={Style['square-config']}>
            <Button size="large" type="large">
              开启声音
            </Button>
            <Button size="large" type="large">
              重新开始
            </Button>
          </div>
          <div className={Style['square-move']}>
            <Row className={Style['move-up-down']}>
              <Button size="large" type="primary">
                <Icon type="up" />
              </Button>
            </Row>
            <Row className={Style['move-left-right']}>
              <Button size="large" type="primary">
                <Icon type="left" />
              </Button>
              <Button size="large" type="primary">
                <Icon type="down" />
              </Button>
              <Button size="large" type="primary">
                <Icon type="right" />
              </Button>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.game,
  };
}
export default connect(mapStateToProps)(Game);
