$('dt').click(function() {
  elm = $(this).next();

  if (elm.is(':visible')) {
    elm.fadeOut();
  } else {
    elm.fadeIn();
  }
});
