<?php
 
include_once '../../DB/DB.php';


$data = json_decode(file_get_contents('php://input'), true);


$name = mysqli_escape_string($conn,$data['n']);
$email = mysqli_escape_string($conn,$data['e']);
$password = mysqli_escape_string($conn,$data['p']);
$password_v = mysqli_escape_string($conn,$data['pv']);
$first_day_of_week = mysqli_escape_string($conn,$data['fdow']);
$fk_cid = mysqli_escape_string($conn,$data['c']);

// checking if two passwords are matched  
   if($password == $password_v){

     
    
   }else{

    
     $json = array(
 
        'error' => 'passwords do not match'
     );

     echo json_encode($json);


   }