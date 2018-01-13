import React, { PureComponent } from 'react';
import Style from './Game.css';

class Game extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style['game-container']} id="game-container">
          <div className={Style['gird-container']}>
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
          <div className="tile-container" id="tile-container" />
        </div>
      </div>
    );
  }
}

export default Game;
