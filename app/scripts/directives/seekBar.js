<<<<<<< HEAD

=======
>>>>>>> 7df7c5dfe91e21cb05791442cec9615315a1a28c
(function() {
  function seekBar($document) {
      var calculatePercent = function(seekBar, event) {
     var offsetX = event.pageX - seekBar.offset().left;
     var seekBarWidth = seekBar.width();
     var offsetXPercent = offsetX / seekBarWidth;
     offsetXPercent = Math.max(0, offsetXPercent);
     offsetXPercent = Math.min(1, offsetXPercent);
     return offsetXPercent;
 };
      return {
         templateUrl: '/templates/directives/seek_bar.html',
         replace: true,
         restrict: 'E',
<<<<<<< HEAD
         scope: {
                  onChange: '&'
              },
=======
                  scope: { },
>>>>>>> 7df7c5dfe91e21cb05791442cec9615315a1a28c
                  link: function(scope, element, attributes) {
                    scope.value = 0;
                                scope.max = 100;

                                var percentString = function () {
                                    var value = scope.value;
                                    var max = scope.max;
                                    var percent = value / max * 100;
                                    return percent + "%";
                                };

                                scope.fillStyle = function() {
                                    return {width: percentString()};
                                };
                                scope.thumbStyle = function() {
                                    return {left: percentString()};
                    }
                };
<<<<<<< HEAD

var seekBar = $(element);

 attributes.$observe('value', function(newValue) {
     scope.value = newValue;
 });

 attributes.$observe('max', function(newValue) {
     scope.max = newValue;
 });
                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
                    notifyOnChange(scope.value);

=======
                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
>>>>>>> 7df7c5dfe91e21cb05791442cec9615315a1a28c
 };

                scope.trackThumb = function() {
                  $document.bind('mousemove.thumb', function(event) {
                    var percent = calculatePercent(seekBar, event);
<<<<<<< HEAD
                    notifyOnChange(scope.value);

=======
>>>>>>> 7df7c5dfe91e21cb05791442cec9615315a1a28c

                scope.$apply(function() {
                  scope.value = percent * scope.max;
         });
<<<<<<< HEAD
         var notifyOnChange = function(newValue) {
              if (typeof scope.onChange === 'function') {
                  scope.onChange({value: newValue});
              }
          };
=======
>>>>>>> 7df7c5dfe91e21cb05791442cec9615315a1a28c
     });

     $document.bind('mouseup.thumb', function() {
         $document.unbind('mousemove.thumb');
         $document.unbind('mouseup.thumb');
     });
 };
    }

    angular
        .module('blocJams')
        .directive('seekBar', ['$document', seekBar]);
})();
