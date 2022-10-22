Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges', 'Peaches']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Morgan and Noah\'s house'
      }
    },
    series: [{
      name: 'Noah',
      data: [1, 0, 4, 6]
    }, {
      name: 'Morgan',
      data: [5, 7, 3, 6]
    }]
  });
