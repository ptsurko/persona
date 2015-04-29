(function (global, $) {

    $(function () {
        var inputTimeout = 500;
        var inputTimeoutId;

        function getCategories() {
            var categories = [];

            $('input[data-type="category"]').each(function (idx, el) {
                categories.push(el.value || 'N/A');
            });

            return categories;
        }

        function getCategoryValues() {
            var values = [];

            $('input[data-type="cat-value"]').each(function (idx, el) {
                values.push(parseInt(el.value));
            });

            return values;
        }

        $('[contenteditable]').attr('spellcheck', false);

        $('.persona-collage').collage();

        $('.persona-avatar').imageDrop({
            imageClass: 'persona-photo img-rounded'
        });

        $('#spider-data input[data-type]').on('input', function (event) {
            var self = this;
            inputTimeoutId && global.clearTimeout(inputTimeoutId);
            inputTimeoutId = global.setTimeout(function () {
                $(self).closest('form').trigger('submit');
            }, inputTimeout);
        });

        $('#spider-data').on('submit', function (event) {
            var chart = $('.persona-spider').highcharts();

            chart.xAxis[0].setCategories(getCategories());
            chart.series[0].setData(getCategoryValues());
        });

        $('.persona-spider').highcharts({
            credits: {
                enabled: false
            },
            chart: {
                polar: true,
                type: 'area'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: ''
            },
            pane: {
                size: '80%'
            },
            xAxis: {
                categories: getCategories(),
                tickmarkPlacement: 'on',
                lineWidth: 0
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b> of 10<br/>'
            },
            legend: {
                enabled: false
            },
            series: [
                {
                    name: 'John Doe',
                    data: getCategoryValues(),
                    color: '#f1863b',
                    pointPlacement: 'on'
                }
            ]
        });
    });

})(this, jQuery);
