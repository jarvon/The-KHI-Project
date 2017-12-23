<?php
$loginQuery = $db->query("SELECT * FROM users WHERE pin = '$pin'");
    
$loggedIn = $loginQuery->num_rows;

if($loggedIn == true){
    
    $token = mt_rand(10000, 99999);
    
    //$tokenQuery = $db->query("INSERT INTO `tokens` VALUES ('','$token')");
    
    $queryCheck = $db->affected_rows;
    
    if($queryCheck > 0) {
        
        //Return True | Successful
        echo $token;
        
    }
    
} else {
    
    //Return False | Denied
    echo 'false';
    
}

    ?>