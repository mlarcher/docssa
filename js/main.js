(function($, window, undefined) {
  "use strict";

  $(document).ready(function() {

    var mainItems,
    currentMainMenuItem,
    currentMainArticle,
    scrollTarget = $('html, body'),
    mainHeader;

    mainItems = $('.mainMenu_item');
    mainHeader = $('.mainHeader');


    mainItems.bind('click', function(e) {
      e.preventDefault();

      mainHeader.hide();

      if (currentMainMenuItem) {
        currentMainMenuItem.removeClass('_is_current');
      }
      if (currentMainArticle) {
        currentMainArticle.removeClass('_is_current');
      }

      currentMainMenuItem = $(this).addClass('_is_current');
      currentMainArticle = $(currentMainMenuItem.find('.mainMenu_link').attr('href')).addClass('_is_current');

      scrollTarget.scrollTop(0);
    });

    //mainItems.eq(1).find('.mainMenu_link').trigger('click');

  });

}(jQuery, window));
