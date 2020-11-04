Highcharts.getJSON('https://raw.githubusercontent.com/natalieleonardk/covid/main/project', function (data) {
    // Instantiate the map
    Highcharts.mapChart('container', {

        chart: {
            map: 'countries/us/us-all',
            borderWidth: 1
        },

        title: {
            text: 'COVID-19 in the United States'
        },

        exporting: {
            sourceWidth: 600,
            sourceHeight: 500
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#F7DC6F',
            maxColor: '#7B241C',
            stops: [
                [0, '#F7DC6F'],
                [0.67, '#E67E22'],
                [1, '#7B241C']
            ]
        },

        series: [{
            animation: {
                duration: 1000
            },
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Positive Cases',
            tooltip: {
                pointFormat: '{point.code}: {point.value} cases'
            }
        }]
    });
});
