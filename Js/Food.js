$(document).ready(function() {

  
    function HideAllFood() {
     $("#FOOD-MACROS-DIV").addClass("HIDE");
     $("#FOOD-LIST-DIV").addClass("HIDE");
     $("#SEARCH-FOOD").addClass("HIDE");
     $("#cam").hide();
    } 

    HideAllFood();
    $("#FOOD-MACROS-DIV").removeClass("HIDE");
    $("#FOOD-LIST-DIV").removeClass("HIDE");
  




$("#ADD-FOOD-BTN").click(function (){ 
    HideAllFood();
    $("body,html").animate({scrollTop:0},0);
    $("#SEARCH-FOOD").removeClass("HIDE");
});


$("#SEARCH-BACBTN").click(function () { 
    $("#SEARCH-FOOD").addClass("HIDE");
    $("#FOOD-MACROS-DIV").removeClass("HIDE");
    $("#FOOD-LIST-DIV").removeClass("HIDE");
});






});
