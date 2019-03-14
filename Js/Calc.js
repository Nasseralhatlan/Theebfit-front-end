$(document).ready(function(){


    $("#res").removeClass("CALC-RESULT-DIV-GLOW");


var gender = "f";

$("#Gender-Male").click(function(){
    gender = "m" ;
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
    $("#Gender-Female").removeClass("CALC-OP1-Active");
    $("#Gender-Male").addClass("CALC-OP2-Active")
 });
 
 
 $("#Gender-Female").click(function(){
  gender = "f" ;
  $("#res").removeClass("CALC-RESULT-DIV-GLOW");
  $("#Gender-Male").removeClass("CALC-OP2-Active");
  $("#Gender-Female").addClass("CALC-OP1-Active")
 }); 



var WeightType = "Kg";

$("#Kg").click(function(){

    WeightType = "Kg" ;
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
    $("#Lb").removeClass("CALC-OP2-Active");
    $("#Kg").addClass("CALC-OP1-Active")
    
    });
    
    
    $("#Lb").click(function(){
    
    WeightType = "Lb" ;
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
    $("#Kg").removeClass("CALC-OP1-Active");
    $("#Lb").addClass("CALC-OP2-Active")
    
});



var HeightType = "Cm";

$("#Cm").click(function(){

    HeightType = "Cm" ;
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
    $("#Feet").removeClass("CALC-OP2-Active");
    $("#Cm").addClass("CALC-OP1-Active")
    
    });
    
    
    $("#Feet").click(function(){
    
    HeightType = "Feet" ;
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
    $("#Cm").removeClass("CALC-OP1-Active");
    $("#Feet").addClass("CALC-OP2-Active")
    
});

$("#CALC-Height-Input").keyup(function(){
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
});

$("#CALC-Age-Input").keyup(function(){
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
});

$("#CALC-Weight-Input").keyup(function(){
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
});


$("#CALC-BTN").click(function(){

var Height = 0;
Height = $("#CALC-Height-Input").val();

if(Height == ""){
    Height = 0;
}



age = $("#CALC-Age-Input").val();
if(age == ""){
    age = 0;
}


var Weight = 0 ;
Weight = $("#CALC-Weight-Input").val();
if(Weight == ""){
    Weight = 0;
}

if(WeightType=="Lb"){

     Weight = Weight / 2.2 ; 
}




if(HeightType == "Feet"){

 Height = Height * 30.48  ; 
 
}





var Act = $("select#Act option").filter(":selected").val();
var BMR = 0 ;



if(Height != 0 && Height != "0" && Weight != 0 && Weight != "0" && age != 0 && age != "0"){
            
           if(gender == "f"){

            BMR  = 10 * (Weight) + 6.25 * (Height) - 5 * age - 161;

            }else if(gender == "m"){

            BMR  = 10 * (Weight) + 6.25 * (Height) - 5 * age + 5 ;

            }

}else{

    BMR = 0 ; 
    cal = 0 ;
    $("#res").empty();
    $("#res").append("Please fill the form");
    $("#res").removeClass("CALC-RESULT-DIV-GLOW");
    $("body,html").animate({scrollTop:0},500);

    return;
}


var cal  =  0 ;

if(Act == "1"){

    cal = BMR * 1.2 ;

}else if(Act == "2"){
 
    cal = BMR * 1.375 ; 

}else if(Act == "2.5"){
  
    cal = BMR * 1.45 ; 

}else if(Act == "3"){
 
    cal = BMR * 1.55 ; 

}else if(Act == "4"){
 
    cal = BMR * 1.725 ; 

 }else if(Act == "5"){
 
    cal = BMR * 1.9 ; 

 }




 $("#res").empty();
 $("#res").append(Math.trunc(cal)+" cal");
 $("#res").addClass("CALC-RESULT-DIV-GLOW");
 $("body,html").animate({scrollTop:0},500);


});


});