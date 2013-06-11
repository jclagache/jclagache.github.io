function resize() {
  var $main = $('#main');
  if (!$main.length) return;

  var $social = $('#social');
  var socialHeight = $social.length ? $social.outerHeight() : 0;
  var $head = $('#head');
  var headHeight = $head.length ? $head.outerHeight() : 0;

  var windowWidth = $(window).width();

  if (windowWidth < 480) {
    $main.css('height', '');
  } else {
    var height =  $(window).height();
    $main.css('height', height - socialHeight - headHeight);
  }
}    

// Make it happen on window resize.
$(window).resize(resize);
resize();
