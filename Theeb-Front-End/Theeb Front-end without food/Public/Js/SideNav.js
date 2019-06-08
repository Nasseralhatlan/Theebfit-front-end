$(document).ready(function(){
          

    function RemoveAllClasses(){
      $("#Home-btn").removeClass("active");
      $("#Food-btn").removeClass("active");
      $("#Workout-btn").removeClass("active");
      $("#Weight-btn").removeClass("active");
      $("#Calc-btn").removeClass("active");
      $("#Settings-btn").removeClass("active");
    }


    function HideAll(){
    $("#Home").hide();
    $("#FOOD").hide();
    $("#Workout").hide();
    $("#Weight").hide();
    $("#Calc").hide();
    $("#Settings").hide();
    }



    HideAll();
    $("#Home").show();



    function toggleSideNav(){
      $("#SIDE_NAV").toggleClass("side-nav-active");
      $("#overlay").toggleClass("overlay-active");
    }


    $("#MENU").click(function(){
      toggleSideNav();
    });
  
    $("#overlay").click(function(){
        toggleSideNav();
    });



    $("#Home-btn").click(function(){
      RemoveAllClasses();
      HideAll();
      toggleSideNav();
      $("#Home").show();
      $("#Home-btn").addClass("active");
    });


    $("#Food-btn").click(function(){
      RemoveAllClasses();
      HideAll();
      toggleSideNav();
      $("#FOOD").show();
      $("#Food-btn").addClass("active");
    });


    $("#Workout-btn").click(function(){
      RemoveAllClasses();
      HideAll();
      toggleSideNav();
      $("#Workout").show();
      $("#Workout-btn").addClass("active");
    });


    $("#Weight-btn").click(function(){
      RemoveAllClasses();
      HideAll();
      toggleSideNav();
      $("#Weight").show();
      $("#Weight-btn").addClass("active");
    });

    $("#Calc-btn").click(function(){
      RemoveAllClasses();
      HideAll();
      toggleSideNav();
      $("#Calc").show();
      $("#Calc-btn").addClass("active");
    });


    $("#Settings-btn").click(function(){
      RemoveAllClasses();
      HideAll();
      toggleSideNav();
      $("#Settings").show();
      $("#Settings-btn").addClass("active");
    });

    
});