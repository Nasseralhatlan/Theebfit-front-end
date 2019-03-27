$(document).ready(function() {

  
    function HideAllFood() {
     $("#FOOD-MACROS-DIV").addClass("HIDE");
     $("#FOOD-LIST-DIV").addClass("HIDE");
     $("#SEARCH-FOOD").addClass("HIDE");
     $("#EDIT-MACROS-DIV").addClass("HIDE");
     $("#EDIT-MACROS-DIV").hide();

     $("#cam").hide();
    } 

    HideAllFood();
    $("#FOOD-MACROS-DIV").removeClass("HIDE");
    $("#FOOD-LIST-DIV").removeClass("HIDE");
  


$("#EDIT-CAL-BTN").click(function () { 
  HideAllFood();
  $("body,html").animate({scrollTop:0},0);
  $("#EDIT-MACROS-DIV").show();
  $("#EDIT-MACROS-DIV").removeClass("HIDE");
});

$("#ADD-FOOD-BTN").click(function (){ 
    HideAllFood();
    $("body,html").animate({scrollTop:0},0);
    $("#SEARCH-FOOD").removeClass("HIDE");
});


$("#SEARCH-BACBTN").click(function () { 
    $("#SEARCH-FOOD").addClass("HIDE");
    $("body,html").animate({scrollTop:0},0);
    $("#FOOD-MACROS-DIV").removeClass("HIDE");
    $("#FOOD-LIST-DIV").removeClass("HIDE");
});


$("#BACK-EDIT-MACROS-BTN").click(function () { 
  $("#SEARCH-FOOD").addClass("HIDE");
  $("#EDIT-MACROS-DIV").addClass("HIDE");
  $("body,html").animate({scrollTop:0},0);
  $("#FOOD-MACROS-DIV").removeClass("HIDE");
  $("#FOOD-LIST-DIV").removeClass("HIDE");
  $("#EDIT-MACROS-DIV").hide();
});

$("#SAVE-EDIT-MACROS-BTN").click(function () { 
  $("#SEARCH-FOOD").addClass("HIDE");
  $("#EDIT-MACROS-DIV").addClass("HIDE");
  $("body,html").animate({scrollTop:0},0);
  $("#FOOD-MACROS-DIV").removeClass("HIDE");
  $("#FOOD-LIST-DIV").removeClass("HIDE");
  $("#EDIT-MACROS-DIV").hide();
});


$("#CAM-CAN-BTN").click(function () { 
    Quagga.stop();
    $("#cam").hide();
    $("#FOOD-MACROS-DIV").show();
    $("#FOOD-LIST-DIV").show();
    $("#SEARCH-FOOD").show();
    $("body,html").animate({scrollTop:0},0);
    $("#SEARCH-FOOD").removeClass("HIDE");    
});

$("#SCAN-BARCODE-BTN").click(function(){ 

$("#SEARCH-FOOD").addClass("HIDE");

Quagga.init({
inputStream : {
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
    Quagga.stop();
    $("#cam").hide();
    $("#SEARCH-FOOD").removeClass("HIDE");
    return
}

  console.log("Initialization finished. Ready to start");
    $("#cam").show();
    $("video").attr("width","");
    $("video").attr("height","");
    $("canvas").hide();
    $("br").hide();
    $("#FOOD-MACROS-DIV").hide();
    $("#FOOD-LIST-DIV").hide();
    $("#SEARCH-FOOD").hide();
    $("video").addClass("CAM");



    Quagga.start();
    console.log("started");


    Quagga.onDetected(function(data){
    console.log(data.codeResult.code);
  
     
    var text = data.codeResult.code ; 
    

    $("#SEARCH-INPUT").val(text);
    $("#cam").hide();
    $("#FOOD-MACROS-DIV").show();
    $("#FOOD-LIST-DIV").show();
    $("#SEARCH-FOOD").show();
    $("body,html").animate({scrollTop:0},0);
    $("#SEARCH-FOOD").removeClass("HIDE");

    Quagga.stop();

     
   });

  });
});



});
