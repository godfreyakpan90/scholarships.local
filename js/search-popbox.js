

//********** Script that runs the pop-search box ***********//

$(document).ready(function() {
  
     $('.search-icon a').click(function(){
          var el = $(this);
          var le = $('.search-icon a i')
          el.closest('.icons').find('#searchbar').slideToggle();
       
          if(le.hasClass('fa-search-minus')) {
             le.removeClass('fa-search-minus');
          } else {
             le.addClass('fa-search-minus');
          }

     });  

  });




