$(document).ready(function() {

  
    function HideAllFood() {
     $("#FOOD-MACROS-DIV").hide();
     $("#FOOD-LIST-DIV").hide();
     $("#SEARCH-FOOD").hide();
    }


    HideAllFood();
    $("#FOOD-MACROS-DIV").show();
    $("#FOOD-LIST-DIV").show();
  




$("#ADD-FOOD-BTN").click(function (){ 
    HideAllFood();
    $("body,html").animate({scrollTop:0},500);
    $("#SEARCH-FOOD").show();
});

 




});
