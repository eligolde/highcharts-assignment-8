Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Inequality rates among developed nations'
  },
  subtitle: {
    text: 'Source: ' +
      '<a href="http://data.un.org/DocumentData.aspx?q=economic+inequality&id=423" ' +
      'target="_blank">United Nations</a>'
  },
  xAxis: {
    categories: [
      'Canada',
      'France',
      'Germany',
      'Italy',
      'Japan',
      'United Kingdom',
      'United States'
    ],
    crosshair: true
  },
  yAxis: {
    title: {
      useHTML: true,
      text: 'Level of inequality (%)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Income Inequality',
    data: [18.2, 14.4, 17.7, 21.3, 6.3, 17, 26.6]

  }, {
    name: 'Education Ineqaulity',
    data: [2.7, 9.1, 2.7, 11, 1.6, 2.8, 5.5]

  }, {
  	name: 'Life Expectancy Inequality',
    data: [4.6, 3.8, 3.8, 3.1, 2.9, 4.1, 6.3]
  }]
});

//second chart

Highcharts.chart('container2', {

  title: {
    text: 'Life expectancy in developed countries, 1975-2020'
  },

  subtitle: {
    text: 'Source: <a href="http://data.un.org/Data.aspx?q=life+expectancy&d=PopDiv&f=variableID%3a68" target="_blank">United Nations</a>'
  },

  yAxis: {
    title: {
      text: 'Life Expectancy (Years)',
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 1975 to 2020'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1975,
      pointInterval: 5,
    }
  },

  series: [{
    name: 'Canada',
    data: [73.451, 75.0637, 76.3472, 77.4308, 78.0194, 79.2335,
      80.1364, 81.3469, 81.9246, 82.0471
    ]
  }, {
    name: 'France',
    data: [72.9072, 74.2332, 75.305, 76.8335, 77.8713, 79.0472,
      80.3394, 81.4275, 82.1857, 82.2104
    ]
  }, {
    name: 'Germany',
    data: [71.5205, 73.0924, 74.4972, 75.3588, 76.5619, 78.0637,
      79.2618, 80.0864, 80.5742, 81.1472,
    ]
  }, {
    name: 'Italy',
    data: [72.7282, 74.0531, 75.6032, 76.9909, 78.1161, 79.6072, 81.023,
      82.1371, 82.5255, 82.3953,
    ]
  }, {
    name: 'Japan',
    data: [74.3419, 76.1261, 77.7899, 78.9838, 79.6702, 81.1759, 82.012,
      82.9193, 83.8928, 84.6879,
    ]
  }, {
  name: 'United Kingdom',
  data: [72.6523, 73.593, 74.5378, 75.7359, 76.6164, 77.8525, 79.1116, 80.4008, 80.9238, 80.4345,
  ]
  }, {
  name: 'United States',
  data: [72.5337, 73.7172, 74.6421, 75.3699, 75.8536, 76.8114, 77.5573, 78.7724, 78.8694, 77.4144,
  ]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
