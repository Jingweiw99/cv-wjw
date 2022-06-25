const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/radar');
require('zrender/lib/svg/svg');

var chartDom = document.getElementById('skills');
var myChart = echarts.init(chartDom);
var option;

option = {
  radar: {
    name: {
        radius:1,
        textStyle: {
            color:'black' ,
            
            borderRadius: 3,
            padding: [-8, -8],
            fontSize:10
        }
    },
    indicator: [
      { name: '静态页面', max: 100 },
      { name: 'JS基础', max: 100 },
      { name: 'Vue全家桶', max: 100 },
      { name: '前后端分离', max: 100 },
      { name: '计算机基础', max: 100 },
      { name: '沟通能力', max: 100 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [90, 65, 70, 65, 70, 66]
        }
      ]
    }
  ]
};

option && myChart.setOption(option);