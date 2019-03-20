$(document).ready(function() {

  
    function HideAllFood() {
     $("#FOOD-MACROS-DIV").hide();
     $("#FOOD-LIST-DIV").hide();
     $("#SEARCH-FOOD").removeClass("SEARCH-FOOD-DIV-ACTIVE");
    }


    HideAllFood();
    $("#FOOD-MACROS-DIV").show();
    $("#FOOD-LIST-DIV").show();
  




$("#ADD-FOOD-BTN").click(function (){ 
    HideAllFood();
    $("body,html").animate({scrollTop:0},100);
    $("#SEARCH-FOOD").addClass("SEARCH-FOOD-DIV-ACTIVE");
});







});
