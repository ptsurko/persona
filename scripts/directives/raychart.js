// TODO: rename
angular.module('Persona')
  .directive('prRayChart', [function() {
    return {
      restrict: 'EA',
      scope: {
        items: '=items'
      },
      link: function(scope, element, attrs) {
        var rayChart = d3.starline.rayChart();
        var cfg = {w: 400, h: 400, TranslateX: 80, TranslateY: 30}; //TODO: remove
        var g = d3.select(element[0])
          .append("svg")
          .attr("width", cfg.w + 160)
          .attr("height", cfg.h + 60)
          .append("g")
          .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");

        scope.$watch('items', function(newData, oldData) {
          var chartData = newData.map(function(item) {
            return {
              axis: item.label,
              value: item.value
            };
          });
          g.data([[chartData]]).call(rayChart);
        }, true);
      }
    };
  }]);
