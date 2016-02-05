(function() {
  "use strict";

  App.register('component').enter(function() {
    $('select.custom').each(function(){
     var $this = $(this), numberOfOptions = $(this).children('option').length;

     $this.addClass('select-hidden');
     $this.wrap('<div class="select"></div>');
     $this.after('<div class="select-styled"></div>');

     //Set the selected item
     var $styledSelect = $this.next('div.select-styled');
     var selectedValue = $this.children('option').eq(0).text();
     $this.children('option').each(function () {
       if ($(this).attr("selected")) {
           selectedValue = $(this).text();
       }
     });
     $styledSelect.text(selectedValue);


     var $list = $('<ul />', {
         'class': 'select-options'
     }).insertAfter($styledSelect);

     for (var i = 0; i < numberOfOptions; i++) {
         $('<li />', {
             text: $this.children('option').eq(i).text(),
             rel: $this.children('option').eq(i).val()
         }).appendTo($list);
     }

     var $listItems = $list.children('li');

     //Toggle Select box
     $styledSelect.click(function(e) {
         e.stopPropagation();
         $(this).toggleClass('active').next('ul.select-options').toggle();
     });

     //Select option
     $listItems.click(function(e) {
         e.stopPropagation();
         $styledSelect.text($(this).text()).removeClass('active');
         $this.val($(this).attr('rel'));
         $list.hide();
     });

     //Close if clicked outside
     $(document).click(function() {
         $styledSelect.removeClass('active');
         $list.hide();
     });

    });
  });
})();
