$(document).ready(function(){

         startingPointSign();
         
         function startingPointSign(){
            $("#SIGN-IN-OP").addClass("ACTIVE");
            $("#SIGN-UP-OP").removeClass("ACTIVE");
            $("#SIGNIN-FORM").show();
            $("#SIGNUP-FORM").hide();
         }


          $("#SIGN-UP-OP").click(function(){
            $("#SIGN-UP-OP").addClass("ACTIVE");
            $("#SIGN-IN-OP").removeClass("ACTIVE");
            $("#SIGNUP-FORM").show();
            $("#SIGNIN-FORM").hide();
          });

          $("#SIGN-IN-OP").click(function(){
            $("#SIGN-IN-OP").addClass("ACTIVE");
            $("#SIGN-UP-OP").removeClass("ACTIVE");
            $("#SIGNIN-FORM").show();
            $("#SIGNUP-FORM").hide();
          });




});