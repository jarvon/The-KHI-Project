<?php

//-------------------------
//Database
//-------------------------
include '../database.php';

//Congregation Pin
$pin = mysqli_real_escape_string($db, $_GET['pin']);

//Check Congregation Pin
$checkPinQuery = $db->query("SELECT * FROM users WHERE pin = '$pin'");

//Check What Results The Last Query Gives
$checkPinQueryCheck = $checkPinQuery->num_rows;

//Proceed With Image Upload
if($checkPinQueryCheck > 0){

    //Empty Array
    $mapsAR = array();

    //Select All Maps
    $query = $db->query("SELECT * FROM territory WHERE pin = '$pin'");

    while($maps = $query->fetch_assoc()){

        //Save Maps Into Array
        $mapsAR[] = $maps;

    }

    //Create a JSON Response
    echo json_encode($mapsAR);

}

?>