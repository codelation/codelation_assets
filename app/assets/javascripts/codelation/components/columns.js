$(document).ready(function() {
  var elementsWithColumns = $('body *').filter(function() {
    return $(this).css('column-count') !== 'auto';
  });

  elementsWithColumns.each(function() {
    var container = $(this);
    var columns = container.css('column-count');
    var children = container.children().length;
    var missingColumns = columns - (children % columns);
    for (var i = 0; i < missingColumns; i++) {
      container.append('<span></span>');
    }
  });
});
