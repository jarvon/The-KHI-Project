<?php

//Start Session
session_start();

$server = $_SERVER['SERVER_NAME'];

if($server == '192.168.64.2'){
    
    //Development
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'khi_admin';
    
} else {
    
    //Production
    $host = 'localhost';
    $username = 'jarvon';
    $password = 'jarvon8880';
    $database = 'khi_admin';
    
}

//New Connection
$db = new mysqli($host, $username, $password, $database);

if ($db->errno) {
    
    echo "There was a problem connecting to the database";
    
}

//Check DB Function
function connection($db) {
    
    if($db) {
        
        echo 'The database was succesfully connected to the application.';
        
    } else {
        
        echo "Error: The database could not be accessed.";
        
    }
    
}

?>