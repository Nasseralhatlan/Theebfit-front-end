$(document).ready(function(){


    startFoodPoint();

  
    function HideAllFood(){
     $("#FOOD-MACROS-DIV").hide();
     $("#FOOD-LIST-MAIN-DIV").hide();
     $("#SEARCH-FOOD").hide();
     $("#EDIT-MACROS-DIV").hide();
     $("#FOOD-INFO-ADDED").hide();
     $("#FOOD-INFO-SEARCH").hide();

    } 

    function addClassHideAllFood(){
      $("#FOOD-MACROS-DIV").addClass("HIDE");
      $("#FOOD-LIST-MAIN-DIV").addClass("HIDE");
      $("#SEARCH-FOOD").addClass("HIDE");
      $("#EDIT-MACROS-DIV").addClass("HIDE");
      $("#FOOD-INFO-ADDED").addClass("HIDE");
      $("#FOOD-INFO-SEARCH").addClass("HIDE");
    }

    function ShowOneFood(id){
      $("body,html").animate({scrollTop:0},0);
      HideAllFood();
      addClassHideAllFood();
      $(id).show();
      $(id).removeClass("HIDE");
    }


    function startFoodPoint(){
      HideAllFood();
      addClassHideAllFood();
      $("body,html").animate({scrollTop:0},0);
      $("#FOOD-MACROS-DIV").show();
      $("#FOOD-LIST-MAIN-DIV").show();
      setTimeout(function(){  
        $("#FOOD-MACROS-DIV").removeClass("HIDE");
        $("#FOOD-LIST-MAIN-DIV").removeClass("HIDE");
      },50);
    }



  

$("#EDIT-CAL-BTN").click(function () { 
  ShowOneFood("#EDIT-MACROS-DIV");
});


$("#OP-GRAMS").click(function(){
  $("#OP-PRE").removeClass("ACTIVE-OPTION");
  $("#OP-GRAMS").addClass("ACTIVE-OPTION");
  $("#EDIT-MACROS-PRE").hide();
  $("#EDIT-MACROS-GRAMS").show();
})

$("#OP-PRE").click(function(){
  $("#OP-GRAMS").removeClass("ACTIVE-OPTION");
  $("#OP-PRE").addClass("ACTIVE-OPTION");
  $("#EDIT-MACROS-GRAMS").hide();
  $("#EDIT-MACROS-PRE").show();
})

$("#ADD-FOOD-BTN").click(function (){ 
   ShowOneFood("#SEARCH-FOOD");
});


$("#SEARCH-BACBTN").click(function () { 
  startFoodPoint();
});


$("#BACK-EDIT-MACROS-BTN").click(function () { 
  startFoodPoint();
});

$("#SAVE-EDIT-MACROS-BTN").click(function () { 
  startFoodPoint();
});


$("#BACK-ADDED-FOOD-INFO-BTN").click(function () { 
  startFoodPoint();
});

$("#SAVE-ADDED-FOOD-INFO-BTN").click(function () { 
  startFoodPoint();
});

$(".ADDED-FOOD").click(function (){  
  ShowOneFood("#FOOD-INFO-ADDED");
});




$("#BACK-SEARCH-FOOD-INFO-BTN").click(function () { 
  ShowOneFood("#SEARCH-FOOD");
});

$("#ADD-SEARCH-FOOD-INFO-BTN").click(function () { 
  startFoodPoint();
});

$(".SEARCH-RESULT-FOOD").click(function (){  
  ShowOneFood("#FOOD-INFO-SEARCH");
});







});
