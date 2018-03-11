import React, { PureComponent } from 'react';
import { Button, Icon, Row } from 'antd';
import { connect } from 'dva';
import moveAudio from '../../assets/move.mp3';
import popupAudio from '../../assets/popup.mp3';
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
  constructor(...args) {
    super(...args);
    // 游戏声音
    this.audioMove = new window.Audio(moveAudio);
    this.audioPopup = new window.Audio(popupAudio);
  }
  componentDidMount() {
    document.addEventListener('keyup', this.onKeyHandle.bind(this)); // eslint-disable-line
    // document.addEventListener('keydown', this.onKeyHandle, false); // eslint-disable-line
  }
  // 在当前组件被销毁时同时删除监听事件
  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyHandle.bind(this), false); // eslint-disable-line
    // 同时上传用户的最新bestScore;
    this.props.dispatch({ type: 'game/e_pushScore' });
  }
  onKeyHandle(e) {
    switch (e.keyCode) {
      case keyW:
      case keyUp:
        this.props.dispatch({ type: 'game/r_MoveUp' });
        if (this.props.game.voice) this.audioPopup.play();
        break;
      case keyS:
      case keyDown:
        this.props.dispatch({ type: 'game/r_MoveDown' });
        if (this.props.game.voice) this.audioPopup.play();
        break;
      case keyA:
      case keyLeft:
        this.props.dispatch({ type: 'game/r_MoveLeft' });
        if (this.props.game.voice) this.audioPopup.play();
        break;
      case keyD:
      case keyRight:
        this.props.dispatch({ type: 'game/r_MoveRight' });
        if (this.props.game.voice) this.audioPopup.play();
        break;
      case keyN:
        this.props.onReset();
        break;
      default:
        break;
    }
  }
  getSquares() {
    const squares = this.props.squares;
    const squareOption = [];
    for (let i = 0; i < 4; i++) { // eslint-disable-line
      for (let j = 0; j < 4; j++) { // eslint-disable-line
        if (squares[i][j].num) {
          const item = (<Square key={`${i}-${j}-${squares[i][j].num}`} num={squares[i][j].num} pos={`tile-pos-${i}-${j}`} />);
          squareOption.push(item);
        }
      }
    }
    return squareOption;
  }
  restart() {
    this.props.dispatch({
      type: 'game/e_Init',
    });
  }
  openVoice() {
    this.props.dispatch({
      type: 'game/r_updateVoice',
    });
  }
  render() {
    console.log(this.props);
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
          <div className={Style['game-prompt']}>
            <h2>提示:</h2>
            <p>键盘按键 WSAD 也代表上下左右</p>
          </div>
          <div className={Style['tile-container']}>
            {this.getSquares()}
          </div>
        </div>

        <div className={Style.operation}>
          <div className={Style.scores}>
            <div className={Style.score}>
              <span className={Style['score-num']}>得分</span>
              <span className={Style['score-num']}>{this.props.score}</span>
            </div>
            <div className={Style.score}>
              <span className={Style['score-num']}>最佳</span>
              <span className={Style['score-num']}>{this.props.bestScore}</span>
            </div>
          </div>
          <div className={Style['square-config']}>
            <Button size="large" type="large" onClick={this.openVoice.bind(this)} >
              {this.props.voice ? '关闭声音' : '开启声音'}
            </Button>
            <Button size="large" type="large" onClick={this.restart.bind(this)}>
              重新开始
            </Button>
          </div>
          <div className={Style['square-move']}>
            <Row className={Style['move-up-down']}>
              <Button size="large" type="primary" onClick={this.onKeyHandle.bind(this, { keyCode: keyUp })}>
                <Icon type="up" />
              </Button>
            </Row>
            <Row className={Style['move-left-right']}>
              <Button size="large" type="primary" onClick={this.onKeyHandle.bind(this, { keyCode: keyLeft })}>
                <Icon type="left" />
              </Button>
              <Button size="large" type="primary" onClick={this.onKeyHandle.bind(this, { keyCode: keyDown })}>
                <Icon type="down" />
              </Button>
              <Button size="large" type="primary" onClick={this.onKeyHandle.bind(this, { keyCode: keyRight })}>
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
  return state.game || {};
}
export default connect(mapStateToProps)(Game);
