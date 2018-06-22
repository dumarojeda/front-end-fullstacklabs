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

  var itemMenuLineUp = function () {
    $(".menu-lineup li a").click(function () {
      $(".menu-lineup li a").removeClass("active");
      $(this).toggleClass("active");
    });

    $(".menu-lineup li.profile").click(function () {
      $("body").addClass("profile-active");
    });

    $(".menu-lineup li.lineup").click(function () {
      $("body").removeClass("profile-active");
    });
  }

  var teamMemberActive = function () {
    $(".team ul li a").click(function (e) {
      e.preventDefault();
      var name = $(this).data('name');
      var lastname = $(this).data('lastname');
      var bg = $(this).data('bg');
      $(".menu-lineup li.profile a").text(name + "'s Profile")
      $(".menu-lineup li.stats a").text(name + "'s Stats")
    })
  }

  return {
    init : function () {
      itemActive();
      itemMenuLineUp();
      teamMemberActive();
    }
  }

}();

$(document).ready(function() {
  Global.init();
});