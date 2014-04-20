(function($, window, undefined) {
  "use strict";

  $(document).ready(function() {

    var mainItems,
    currentMainMenuItem,
    currentMainArticle,
    scrollTarget = $('html, body');

    mainItems = $('.mainMenu_item');

    currentMainMenuItem = mainItems.eq(0);
    currentMainArticle = $(currentMainMenuItem.find('.mainMenu_link').attr('href'));

    currentMainMenuItem.addClass('_is_current');
    currentMainArticle.addClass('_is_current');

    mainItems.bind('click', function(e) {
      e.preventDefault();

      currentMainMenuItem.removeClass('_is_current');
      currentMainArticle.removeClass('_is_current');

      currentMainMenuItem = $(this).addClass('_is_current');
      currentMainArticle = $(currentMainMenuItem.find('.mainMenu_link').attr('href')).addClass('_is_current');

      scrollTarget.scrollTop(0);
    });

  });

}(jQuery, window));
