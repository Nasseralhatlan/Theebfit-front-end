


var ele = document.getElementsByClassName("HOVERABLE");

    var i = 0 ;

    for(i;i<ele.length;i++){

            ele[i].addEventListener('touchstart', function (){
                    this.style.backgroundColor = "rgb(0, 0, 0, 0.600)";
                
            });
            
            
            ele[i].addEventListener('mouseover', function (){
                this.style.backgroundColor = "rgb(0, 0, 0, 0.600)";
            
            });


            ele[i].addEventListener('touchend', function (){
                   this.style.backgroundColor = "";
            });


            ele[i].addEventListener('mouseout', function (){
                this.style.backgroundColor = "";
            
            });

 }
