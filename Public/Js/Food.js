$(document).ready(function() {


    startFoodPoint();

  
    function HideAllFood(){
     $("#FOOD-MACROS-DIV").hide();
     $("#FOOD-LIST-DIV").hide();
     $("#SEARCH-FOOD").hide();
     $("#EDIT-MACROS-DIV").hide();
     $("#EDIT-MACROS-DIV").hide();
     $("#FOOD-INFO").hide();
     $("#cam").hide();
    } 


    function addClassHideAll(){
      $("#FOOD-MACROS-DIV").addClass("HIDE");
      $("#FOOD-LIST-DIV").addClass("HIDE");
      $("#SEARCH-FOOD").addClass("HIDE");
      $("#EDIT-MACROS-DIV").addClass("HIDE");
      $("#FOOD-INFO").addClass("HIDE");
    }


    function ShowOne(id){
      $("body,html").animate({scrollTop:0},0);
      HideAllFood();
      addClassHideAll();
      $(id).show();
      $(id).removeClass("HIDE");
    }


    function startFoodPoint(){
      HideAllFood();
      addClassHideAll();
      $("body,html").animate({scrollTop:0},0);
      $("#FOOD-MACROS-DIV").show();
      $("#FOOD-LIST-DIV").show();
      setTimeout(function(){  
        $("#FOOD-MACROS-DIV").removeClass("HIDE");
        $("#FOOD-LIST-DIV").removeClass("HIDE");
      },50);
    }



  

$("#EDIT-CAL-BTN").click(function () { 
  ShowOne("#EDIT-MACROS-DIV");
});


$("#OP-GRAMS").click(function(){
  $("#OP-PRE").removeClass("ACTIVE-OPTION");
  $("#OP-GRAMS").addClass("ACTIVE-OPTION");
  $("#EDIT-MACROS-PRE").hide();
  $("#EDIT-MACROS-GRAMS").show();
  $("#EDIT-MACROS-GOAL-INPUT").prop("disabled",true);
  $("#EDIT-MACROS-GOAL-INPUT").attr("style","background-color:rgb(25,25,25);color:rgb(35,35,35);");

})

$("#OP-PRE").click(function(){
  $("#OP-GRAMS").removeClass("ACTIVE-OPTION");
  $("#OP-PRE").addClass("ACTIVE-OPTION");
  $("#EDIT-MACROS-GRAMS").hide();
  $("#EDIT-MACROS-PRE").show();
  $("#EDIT-MACROS-GOAL-INPUT").prop("disabled",false);
  $("#EDIT-MACROS-GOAL-INPUT").attr("style","");

})

$("#ADD-FOOD-BTN").click(function (){ 
   ShowOne("#SEARCH-FOOD");
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


$("#BACK-FOOD-INFO-BTN").click(function () { 
  startFoodPoint();
});

$("#SAVE-FOOD-INFO-BTN").click(function () { 
  startFoodPoint();
});


$("#CAM-CAN-BTN").click(function () { 
    Quagga.stop();
    $("#cam").hide();
    ShowOne("#SEARCH-FOOD");    
});


$(".FOOD").click(function (){  
  ShowOne("#FOOD-INFO");
});





$("#SCAN-BARCODE-BTN").click(function(){ 

  HideAllFood();
  addClassHideAll();

Quagga.init({
inputStream : {
  numOfWorkers: navigator.hardwareConcurrency,
  name : "Live",
  type : "LiveStream",
  target: document.querySelector('#cam')    // Or '#yourElement' (optional)
},

decoder : {
  readers : ["ean_reader"]
//   [
//   "code_128_reader",
//   "ean_reader",
//   "ean_8_reader",
//   "upc_reader",
//   "upc_e_reader",
// ]
}

}, function(err){



if (err){
    console.log(err);
    alert("Cam is not found or Cam Accsess is rejected if you want to reuse the scanner you have to log out and log in agian and allow Accsess");
    Quagga.stop();
    HideAllFood();
    addClassHideAll();
    ShowOne("#SEARCH-FOOD");
    return
}

  console.log("Initialization finished. Ready to start");
    $("#cam").show();
    $("video").attr("width","");
    $("video").attr("height","");
    $("canvas").hide();
    $("br").hide();
    $("video").addClass("CAM");



    Quagga.start();
    console.log("started");


    Quagga.onDetected(function(data){
    console.log(data.codeResult.code);
  
     
    var text = data.codeResult.code ; 
    

    $("#SEARCH-INPUT").val(text);
    $("#cam").hide();
    ShowOne("#SEARCH-FOOD");

    Quagga.stop();
     
   });

  });
});



});