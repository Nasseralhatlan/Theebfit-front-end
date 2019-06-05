<!DOCTYPE html>

<?php
include_once "../../Private/DB/DB.php";
?>

<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="../Styles/Dark/Sign/Sign.css"/>
    <link rel="stylesheet" href="../Styles/Dark/index/Global.css"/>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:700" rel="stylesheet">
    <title>T H E E B</title>
  </head>



  <body ontouchstart="" onmouseover="">
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->




            

            <div class="SIGNIN-CARD">

             
                      
                        <div class="SING-IN-UP-OPT-DIV">

                             <ul>
                               <li id="SIGN-IN-OP" class="SIGN-IN-OP ACTIVE">Sign in</li>
                               <li id="SIGN-UP-OP" class="SIGN-UP-OP">Sign up</li>
                             </ul>

                        </div>


                       <form id="SIGNIN-FORM" action=""  class="SIGIN-FORM">

                                 <h1> Sign in </h1>
                                 
                               
                                 <div class="SIGNIN-INPUT-DIV">
                                    
                                    <div class="SIGNIN-INPUT-DIV-INPUT">
                                        <label >Eamil</label>
                                          <input type="text" placeholder="email">
                                    </div>
                                 </div>
                                

                                 <div class="SIGNIN-INPUT-DIV">
                                 
                                  <div class="SIGNIN-INPUT-DIV-INPUT">
                                      <label >Password</label>
                                        <input type="password" placeholder="password" >
                                  </div>
                               </div>
                              
                               

                            
                              <a href="index.html"><button  type="button" class="btn SIGNIN-BTN">Sign in</button></a>


                            
                       </form>







                       <form id="SIGNUP-FORM" action="../../Private/API/AUTH/Signup.php" method="POST" class="SIGIN-FORM">

                        <h1> Sign up </h1>
                        
                      
                        <div class="SIGNIN-INPUT-DIV">

                           <div class="SIGNIN-INPUT-DIV-INPUT">
                              <label >Name</label>
                                 <input name="n" type="text" placeholder="ex Nasser">
                           </div>
                        </div>
                       

                        <div class="SIGNIN-INPUT-DIV">

                          <div class="SIGNIN-INPUT-DIV-INPUT">
                              <label >Eamil</label>
                                <input name="e" type="text" placeholder="ex x@x.x">
                          </div>
                       </div>



                        <div class="SIGNIN-INPUT-DIV">

                         <div class="SIGNIN-INPUT-DIV-INPUT">
                            <label >Password</label>
                               <input name="p" type="password" placeholder="Password" >
                         </div>
                      </div>
                    

                      <div class="SIGNIN-INPUT-DIV">



                        <div class="SIGNIN-INPUT-DIV-INPUT">
                            <label >Re enter password</label>
                              <input name="pv" type="password" placeholder="Re enter password" >
                        </div>
                     </div>


                      
                     <div class="SIGNIN-INPUT-DIV">

                      <label >First day of the week</label>
                      <div class="SIGNIN-INPUT-DIV-INPUT">

                      <select name="fdow" id="FIRST-DAY" class="custom-select SELECT" id="inputGroupSelect01" aria-placeholder="First day of the week">
                        <option value="1">Sunday</option>
                        <option value="2">Monday</option>
                        <option value="3">Tuesday</option>
                        <option value="4">Wednesday</option>
                        <option value="5">Thursday</option>    
                        <option value="6">Friday</option>                     
                        <option value="7">Saturday</option>                     
                       </select>  

                      </div>
                    </div>

                  
                    <div class="SIGNIN-INPUT-DIV">

                        <div class="SIGNIN-INPUT-DIV-INPUT">
                            <label >Country</label>

                        <select name="c" id="COUNTRY" class="custom-select SELECT" id="inputGroupSelect01" aria-placeholder="Country">
                          <?php
                          $sql = "SELECT nicename , id  FROM `countries` ";
                          $res = mysqli_query($conn,$sql);
                          $num = mysqli_num_rows($res);
              
             
                          if($num > 0 ){
             
                             while($row = mysqli_fetch_assoc($res) ){
                                 echo  "<option value='".$row['id']."'>".$row['nicename']."</option>";
                             }
                          }


                          ?>                 
                         </select>  
  
                        </div>
                      </div>
  


                     <button id="SIGNUP-BTN" type="submit" class="btn SIGNIN-BTN">Sign up</button></a>


                   
              </form>
            </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="../Js/Jquery.js"></script>
    <script src="../Js/Sign.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
    integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
    integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
    crossorigin="anonymous"></script>

  </body>
</html>
