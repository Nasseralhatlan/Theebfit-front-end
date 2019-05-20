$(document).ready(function(){

    startingPointWeight();

    function HideAllWeight(){
        $("#WEIGHT-WEEKS-LIST").hide();
        $("#WEIGHT-WEEK-DAYS-LIST").hide();
    
    } 
   
    function addClassHideAllWeight(){
        $("#WEIGHT-WEEKS-LIST").addClass("HIDE");
        $("#WEIGHT-WEEK-DAYS-LIST").addClass("HIDE");
    }
   
    
    function ShowOneWeight(id){
         $("body,html").animate({scrollTop:0},0);
         HideAllWeight();
         addClassHideAllWeight();
         $(id).show();
         $(id).removeClass("HIDE");
    }

  
    function startingPointWeight(){
        HideAllWeight();
        addClassHideAllWeight();
        ShowOneWeight("#WEIGHT-WEEKS-LIST");
    }


    $(".WEIGHT-WEEK-DIV").click(function(){

        ShowOneWeight("#WEIGHT-WEEK-DAYS-LIST");
    });

    $("#BACK-WEIGHT-WEEK-BTN").click(function(){
        startingPointWeight();
    });
    
    $("#SAVE-WEIGHT-WEEK-BTN").click(function(){
        startingPointWeight();
    });
 
});