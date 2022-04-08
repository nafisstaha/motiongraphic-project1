$(document).ready(function () {
  $('#slide .button').click(function () {
    let $left = $(this).next();
    $left.animate({
      left:
        parseInt($left.css('left'), 10) == 0
          ? $left.outerWidth()
          : 0,
      });
  });
});