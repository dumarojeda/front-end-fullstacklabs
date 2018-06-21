var Global = function() {
  'use strict';

  var itemActive =  function () {
    $('.menu ul li a').click(function () {
      $('#wrapper-menu').addClass('mode-minimal');
      $('.back').addClass('active');
    });
    $('.back').click(function () {
      $(this).removeClass('active');
      $('#wrapper-menu').removeClass('mode-minimal');
    });
  }

  return {
    init : function () {
      itemActive();
    }
  }

}();

$(document).ready(function() {
  Global.init();
});