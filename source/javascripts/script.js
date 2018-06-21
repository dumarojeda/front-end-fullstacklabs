var Global = function() {
  'use strict';

  var itemActive =  function () {
    $('.menu ul li a').click(function () {
      $('#wrapper-menu').addClass('mode-minimal');
      $('.back').addClass('active');
      $('#wrapper-content').addClass('active');

      var title = $(this).text();
      var content = $(this).data('content');

      $('#wrapper-content .title').text(title);
      $('#wrapper-content .content').text(content);
    });
    $('.back').click(function () {
      $(this).removeClass('active');
      $('#wrapper-menu').removeClass('mode-minimal');
      $('#wrapper-content').removeClass('active');
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