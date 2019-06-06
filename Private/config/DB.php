<?php

class DB{
  
     private $host = "localhost" ;
     private $DBname = "theeb" ;
     private $username = "root" ;
     private $DBpassword = "" ;
     private $conn;


     public function connect(){
          $this->$conn = null ;

          try{

               $this->$conn = new PDO('nysql:host=' . $this->$host . ';dbname=' .$this->$DBname,$this->$username,$this->$DBpassword);
               $this->$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

          }catch(PDOexception $e){

               echo json_encode(array(
                    'error' => 'Connection Error '.$e->getMassage() ,
               ));

          }


          return $this->$conn;
     }


}
// $host = "localhost";
// $username = "root";
// $DBname = "theeb";
// $DBpassword = "";

// $conn = mysqli_connect($host,$username,$DBpassword,$DBname);

// ?>
