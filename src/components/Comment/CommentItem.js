import React, { PureComponent } from 'react';
import { Input, Avatar, Row, Col, Divider } from 'antd';
import Style from './commentItem.css';

const { TextArea } = Input;

class CommentItem extends PureComponent {

  onReplay() {

  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={2} style={{ textAlign: 'right' }} >
            <Avatar shape="square" size="large" icon="user" />
          </Col>
          <Col span={22} style={{ backgroundColor: '#f0f2f5', borderRadius: '5px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <span> <a> duanbowen </a> 发表于  1天前 </span>
              <span className={Style.replay}>
                <svg
                  t="1516609685249"
                  className="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="1620"
                  width="20" height="20"
                >
                  <path d="M997.4 796.9c-8.9 0-17.2-5.2-21-13.6-8.6-18.7-38.5-66.2-90.6-108.8-38.1-31.1-84.4-74-133.4-91.8C690.6 560.4 622.9 540 547.2 540c-51.8 0-98.1 4.3-155.8 14.8l0 179.5c0 9.3-5.6 17.8-14.3 21.4-8.6 3.6-27.6 1.6-34.2-5L10.2 418.1c-4.3-4.3-6.8-10.2-6.8-16.3 0-6.1 2.4-12 6.8-16.3L342.9 52.7c6.6-6.6 23.6-8.6 32.2-5 8.6 3.6 14.3 12 14.3 21.4l0 172c16.7-1.3 33.6-1.7 62.5-1.7 95.3 0 233.6 15.3 350.8 83.4 66.2 38.5 118.2 90.2 154.5 153.5 42.1 73.4 63.4 193.4 63.4 297.5 0 10.9-7.6 20.3-18.3 22.6C1000.7 796.8 999 796.9 997.4 796.9zM88.8 401.8 324 638.9 324 510.3c0-10.3 9.3-19.2 19.4-21.2 63.1-12.6 143.7-16 200.2-16 76.7 0 147.5 14.7 210.4 37.8 50.8 18.6 96.5 44.6 136 77.3 19.6 16.2 45.7 31.5 58.8 46.4C922 512 862.7 439.5 761 380.3c-101.4-59-222.7-76.3-306.7-76.3-49.9 0-103.4 9.5-103.7 9.6-6.2 0.9-14.5 0-19.2-4.1-4.7-4.1-7.4-10.1-7.4-16.3l0-128.6L88.8 401.8z" p-id="1621" fill="#1890ff" />
                </svg>
              </span>
            </div>
            <p style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit.
               Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?
               Refert tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?
            </p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={2} style={{ textAlign: 'right' }} />
          <Col span={22} style={{ padding: 0 }} >
            <Divider />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentItem;

