import * as echarts from '../../components/ec-canvas/echarts';

var data1 =[
  {data:{
    "name": "root",
    "children": [{
      "name": "a",
      "children": [{
        "name": "a1"
      }, {
        "name": "a2"
      }, {
        "name": "a3"
      }, {
        "name": "a4"
      }]
    }, {
      "name": "b",
      "children": [{
        "name": "b1",
        "children": [{
          "name": "b1"
        }]
      }, {
        "name": "b2"
      }, {
        "name": "b3"
      }, {
        "name": "b4"
      }]
    }, {
      "name": "c",
      "children": [{
        "name": "c1"
      }]
    }, {
      "name": "d",
      "children": [{
        "name": "d1"
      }]
    }]
  }
},
  {data:{
    "name": "root",
    "children": [{
      "name": "a",
      "children": [{
        "name": "a1"
      }, {
        "name": "a2"
      }, {
        "name": "a3"
      }, {
        "name": "a4"
      }]
    }, {
      "name": "b",
      "children": [{
        "name": "b1",
        "children": [{
          "name": "b1"
        }]
      }, {
        "name": "b2"
      }, {
        "name": "b3"
      }, {
        "name": "b4"
      }]
    }, {
      "name": "c",
      "children": [{
        "name": "c1"
      }]
    }, {
      "name": "d",
      "children": [{
        "name": "d1"
      }]
    }]
  }
},
{data:{
  "name": "root",
  "children": [{
    "name": "a",
    "children": [{
      "name": "a1"
    }, {
      "name": "a2"
    }, {
      "name": "a3"
    }, {
      "name": "a4"
    }]
  }, {
    "name": "b",
    "children": [{
      "name": "b1",
      "children": [{
        "name": "b1"
      }]
    }, {
      "name": "b2"
    }, {
      "name": "b3"
    }, {
      "name": "b4"
    }]
  }, {
    "name": "c",
    "children": [{
      "name": "c1"
    }]
  }, {
    "name": "d",
    "children": [{
      "name": "d1"
    }]
  }]
}
}
] ;

function initChart(canvas, width, height,data) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);


  var option = {
    tooltip: {
      position: 'right',
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [{
      type: 'tree',
      initialTreeDepth: -1,
      name: 'tree1',
      data: [data],
      top: '5%',
      left: '20%',
      bottom: '2%',
      right: '15%',
      symbolSize: 10,
      // symbol: 'circle',
      itemStyle: {
        color: '#34C626'
      },
      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          // color: 'black'
        }
      }


    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: '产品组成报表图！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    },
    chartList:data1
  },

  onReady() {
  }
});
