angular.module('Persona')
  .directive('propertieschart', [function() {
    return {
      restrict: 'EA',
      scope: {
        properties: '=properties'
      },
      link: function(scope, element, attrs) {
        var rayChart = d3.starline.rayChart();
        var cfg = {w: 400, h: 400, TranslateX: 80, TranslateY: 30}; //TODO: remove
        var g = d3.select(element[0])
          .append("svg")
          .attr("width", cfg.w + 300)
          .attr("height", cfg.h + 100)
          .append("g")
          .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");

        scope.$watch('properties', function(newData, oldData) {
          var chartData = newData.map(function(property) {
            return {
              axis: property.name,
              value: property.value
            };
          });
          g.data([[chartData]]).call(rayChart);
        }, true);
      }
    };
  }]);
