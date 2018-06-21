var Global = function() {
  'use strict';

  var itemActive =  function () {
    $('.menu ul li a').click(function () {
      $('#wrapper-menu').addClass('mode-minimal');
      $('.back').addClass('active');
      $('#wrapper-content.items').addClass('active');

      var title = $(this).text();
      var content = $(this).data('content');

      $('#wrapper-content.items .title').text(title);
      $('#wrapper-content.items .content').text(content);
    });
    $('.back').click(function () {
      $(this).removeClass('active');
      $('#wrapper-menu').removeClass('mode-minimal');
      $('#wrapper-content.items').removeClass('active');
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