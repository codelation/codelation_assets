/*
Required Args: container (a reference to a node)
Optional Args:
  - scrollBreak: (int) Determines how big the options menu is compaired to the screen size
*/

var SelectBox = function(args) {
  if ($(args.container).has("select")){
    var selectboxObj = $(args.container).find("select");

    $(selectboxObj).each(function(){
     var $this = $(this), numberOfOptions = $(this).children('option').length;

     $this.wrap('<div class="ca-selectbox"></div>');
     $this.after('<div class="ca-selectbox-styled"></div>');

     //Set the selected item
     var $styledSelect = $this.next('div.ca-selectbox-styled');
     var selectedValue = $this.children('option').eq(0).text();
     $this.children('option').each(function () {
       if ($(this).attr("selected")) {
           selectedValue = $(this).text();
       }
     });
     $styledSelect.text(selectedValue);


     var $list = $('<ul />', {
         'class': 'ca-selectbox-options'
     }).insertAfter($styledSelect);

     args.scrollBreak =  (args.scrollBreak == null) ? 2 : args.scrollBreak;
     //sets height of options
     var optionListHeight = $(window).height() / args.scrollBreak;
     if (optionListHeight < 230){
       optionListHeight = 230;
     }
     $list.css({maxHeight: optionListHeight + 'px'});

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
         $(this).toggleClass('ca-selectbox-option-active').next('ul.ca-selectbox-options').toggle();
     });

     //Select option
     $listItems.click(function(e) {
         e.stopPropagation();
         $styledSelect.text($(this).text()).removeClass('ca-selectbox-option-active');
         $this.val($(this).attr('rel'));
         $list.hide();
     });

     //Close if clicked outside
     $(document).click(function() {
         $styledSelect.removeClass('ca-selectbox-option-active');
         $list.hide();
     });

    });
  }
};
