import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

class Rank extends PureComponent {
  // 需要的数据  yData=[] 排行榜上的前十名的名字数组,
  // series.data 是排行榜上每个人对应的数值大小
  // this.props.Rank.users this.props.Rank.scores
  componentDidMount() {
    // 拉去接口获取ranks的数据
    console.log(this);
  }
  getOption = () => {
    return {
      title: {
        text: '2048英雄排行榜',
        subtext: 'go go go !',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['跟我来冲榜'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: [12000, 13000, 14000, 15000, 16000, 17000, 18000, 'tesra praeo', 'wdrils seriy', 'mitla weild', 'philips zhang', 'cooper', ['最高分', 'Tom']],
      },
      series: [
        {
          name: '跟我来冲榜',
          type: 'bar',
          data: [12000, 13000, 14000, 15000, 16000, 17000, 18000,
            18203, 23489, 29034, 104970, 131744, 140230],
          itemStyle: {
            normal: { color: '#1890ff' },
          },
        },
      ],
    };
  };
  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        notMerge
        lazyUpdate
        style={{ height: '750px', width: '100%', margin: '0 auto' }}
        className="react_for_echarts"
      />
    );
  }
}
export default Rank;
