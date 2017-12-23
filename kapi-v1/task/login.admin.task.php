<?php

$loginQuery = $db->query("SELECT * FROM users WHERE email = '$email' AND password = '$password'");
    
$loggedIn = $loginQuery->num_rows;

if($loggedIn == true){
    
    //Return True | Successful
    echo 'true';
    
} else {
    
    //Return False | Denied
    echo 'false';
    
}

?>