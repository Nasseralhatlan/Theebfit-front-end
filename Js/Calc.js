$(document).ready(function(){


var gender = "f";

$("#Gender-Male").click(function(){
    gender = "m" ;
    $("#Gender-Female").removeClass("CALC-OP1-Active");
    $("#Gender-Male").addClass("CALC-OP2-Active")
 });
 
 
 $("#Gender-Female").click(function(){
  gender = "f" ;
  $("#Gender-Male").removeClass("CALC-OP2-Active");
  $("#Gender-Female").addClass("CALC-OP1-Active")
 }); 



var WeightType = "Kg";

$("#Kg").click(function(){

    WeightType = "Kg" ;
    
    $("#Lb").removeClass("CALC-OP2-Active");
    $("#Kg").addClass("CALC-OP1-Active")
    
    });
    
    
    $("#Lb").click(function(){
    
    WeightType = "Lb" ;
    
    $("#Kg").removeClass("CALC-OP1-Active");
    $("#Lb").addClass("CALC-OP2-Active")
    
});



var HeightType = "Cm";

$("#Cm").click(function(){

    HeightType = "Cm" ;
    
    $("#Feet").removeClass("CALC-OP2-Active");
    $("#Cm").addClass("CALC-OP1-Active")
    
    });
    
    
    $("#Feet").click(function(){
    
    HeightType = "Feet" ;
    
    $("#Cm").removeClass("CALC-OP1-Active");
    $("#Feet").addClass("CALC-OP2-Active")
    
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
if(Height != "" && Weight != "" && age != ""){
            
           if(gender == "f"){

            BMR  = 10 * (Weight) + 6.25 * (Height) - 5 * age - 161;

            }else if(gender == "m"){

            BMR  = 10 * (Weight) + 6.25 * (Height) - 5 * age + 5 ;

            }

}else{

    BMR = 0 ; 

    cal = "Please fill the form" ;
    $("#res").empty();
    $("#res").append(cal);
    $(window).scrollTop(0);
    return ;
}

var cal  =  0 ;

if(Act == "1"){

    cal = BMR * 1.2 ;

}else if(Act == "2"){
 
    cal = BMR * 1.375 ; 

}else if(Act == "3"){
 
    cal = BMR * 1.55 ; 

}else if(Act == "4"){
 
    cal = BMR * 1.725 ; 

 }else if(Act == "5"){
 
    cal = BMR * 1.9 ; 

 }




 $("#res").empty();
 $("#res").append(Math.trunc(cal)+" cal");
 $(window).scrollTop(0);

});


});