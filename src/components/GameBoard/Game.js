import React, { PureComponent } from 'react';
import { Button, Icon, Row, Col } from 'antd';
import Style from './Game.css';
import Square from './Square';

class Game extends PureComponent {
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

export default Game;
