(function($, window, undefined) {
  "use strict";

  $(document).ready(function() {

    var mainItems,
    currentMainMenuItem,
    currentMainArticle,
    scrollTarget = $('html, body'),
    mainHeader,
    mainFooter;

    mainItems = $('.mainMenu_item');
    mainHeader = $('.mainHeader');
    mainFooter = $('.mainFooter');


    mainItems.bind('click', function(e) {
      e.preventDefault();
      navigateTo($(this));
    });

    function navigateTo($navItem, replace) {
      var href,
      scrollV;

      mainHeader.hide();
      mainFooter.hide();

      if (currentMainMenuItem) {
        currentMainMenuItem.removeClass('_is_current');
      }
      if (currentMainArticle) {
        currentMainArticle.removeClass('_is_current');
      }

      currentMainMenuItem = $navItem.addClass('_is_current');
      console.log(currentMainMenuItem);
      href = currentMainMenuItem.find('.mainMenu_link').attr('href');

      if (href === '#') {
        mainHeader.show();
        mainFooter.show();
      } else {
        currentMainArticle = $(href).addClass('_is_current');
      }

      scrollTarget.scrollTop(0);

      if (history.pushState) {
        if (replace) {
          history.replaceState({}, "", href);
        } else {
          history.pushState({}, "", href);
        }
      } else {
        // provide a fallback
        scrollV = document.body.scrollTop;
        location.hash = href;
        document.body.scrollTop = scrollV;
      }
    }

    //mainItems.eq(1).find('.mainMenu_link').trigger('click');
    if (window.location.hash) {
      navigateTo(mainItems.find('.mainMenu_link').filter('[href=' + window.location.hash + ']').parents('li'));
    } else {
      navigateTo(mainItems.find('.mainMenu_link').filter('[href=#]').parents('li'), true);
    }



  });

}(jQuery, window));
