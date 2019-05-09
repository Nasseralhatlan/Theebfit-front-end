$(document).ready(function(){

    startingPointWorkout();

    function HideAllWorkout(){
        $("#WORKOUT-DAYS-LIST").hide();
        $("#WORKOUT-EDIT-SPLIT-DIV").hide();
        $("#WORKOUTS-LIST").hide();
        $("#ADD-NEW-EXC").hide();
    } 
   
    function addClassHideAllWorkout(){
        $("#WORKOUT-DAYS-LIST").addClass("HIDE");
        $("#WORKOUT-EDIT-SPLIT-DIV").addClass("HIDE");
        $("#WORKOUTS-LIST").addClass("HIDE");
        $("#ADD-NEW-EXC").addClass("HIDE");
    }
   
    
    function ShowOneWorkout(id){
         $("body,html").animate({scrollTop:0},0);
         HideAllWorkout();
         addClassHideAllWorkout();
         $(id).show();
         $(id).removeClass("HIDE");
    }

  
    function startingPointWorkout(){
        addClassHideAllWorkout();
        HideAllWorkout();
        ShowOneWorkout("#WORKOUT-DAYS-LIST");
    }


       $("#EDIT-SPLIT-BTN").click(function(){
        ShowOneWorkout("#WORKOUT-EDIT-SPLIT-DIV");
       });


       $("#CANCEL-EDIT-SPLIT-BTN").click(function(){
        startingPointWorkout();
       });

       $("#SAVE-EDIT-SPLIT-BTN").click(function(){
        startingPointWorkout();
       });


       $(".DAY").click(function(){
        ShowOneWorkout("#WORKOUTS-LIST");
       });


       $("#WORKOUT-BACK-BTN").click(function(){ 
         startingPointWorkout();
        });

        $("#WORKOUT-FINISH-BTN").click(function(){ 
          startingPointWorkout();
        });

        
       $("#WORKOUT-ADD-NEW-EXC").click(function(){ 
         
        ShowOneWorkout("#ADD-NEW-EXC");

       });
       
       $("#CANCEL-ADD-EXC-BTN").click(function(){
        ShowOneWorkout("#WORKOUTS-LIST");
       });
       
       $("#ADD-EXC-BTN").click(function(){
        ShowOneWorkout("#WORKOUTS-LIST");
       });
      

});