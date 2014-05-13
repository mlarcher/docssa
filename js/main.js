(function($, window, undefined) {
  "use strict";

  $(document).ready(function() {

    var mainItems,
    currentMainMenuItem,
    currentMainSection,
    scrollTarget = $('html, body'),
    mainHeader,
    mainFooter,
    hashPrefix,
    nav,
    navOpener;

    mainItems   = $('.mainMenu_item');
    mainHeader  = $('.mainHeader');
    mainFooter  = $('.mainFooter');
    nav         = $('.mainNav'),
    navOpener   = $('.navOpener');


    mainItems.bind('click', function(e) {
      e.preventDefault();
      navigateTo($(this));
    });

    function navigateTo($navItem, replace, subItemDest) {
      var href,
      scrollV;

      mainHeader.hide();
      mainFooter.hide();

      if (currentMainMenuItem) {
        currentMainMenuItem.removeClass('_is_current');
      }
      if (currentMainSection) {
        currentMainSection.removeClass('_is_current');
      }

      currentMainMenuItem = $navItem.addClass('_is_current');
      href = currentMainMenuItem.find('.mainMenu_link').attr('href');

      if (href === '#') {
        mainHeader.show();
        mainFooter.show();
      } else {
        currentMainSection = $(href).addClass('_is_current');
      }

      scrollTarget.scrollTop(0);

      if (history.pushState) {
        if (replace) {
          //history.replaceState({}, "", href);
        } else {
          history.pushState({}, "", href);
        }
      } else {
        // provide a fallback
        scrollV = document.body.scrollTop;
        location.hash = href;
        document.body.scrollTop = scrollV;
      }

      if (subItemDest) {
        window.location.hash = subItemDest;
      }
    }

    //mainItems.eq(1).find('.mainMenu_link').trigger('click');
    if (window.location.hash) {
      hashPrefix = window.location.hash.replace(/_+.*/, '');
      navigateTo(mainItems.find('.mainMenu_link').filter('[href=' + hashPrefix + ']').parents('li'), false, window.location.hash);
    } else {
      navigateTo(mainItems.find('.mainMenu_link').filter('[href=#]').parents('li'), true);
    }
      
      
    // Nav toggle
    navOpener.click(function(){
        if ($('body').hasClass('_nav_is_open')) {
            $('body').removeClass('_nav_is_open');
        } else {
            $('body').addClass('_nav_is_open');
        }
    });



  });

}(jQuery, window));
