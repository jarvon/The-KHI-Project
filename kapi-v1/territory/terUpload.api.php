<?php

//-------------------------
//Database
//-------------------------
include '../database.php';

//Image
$file = $_FILES['file']['name'];

//Congregation Pin
$pin = mysqli_real_escape_string($db, $_POST['pin']);

//Territory City
$terCity = mysqli_real_escape_string($db, $_POST['terCity']);

//Territory Number
$terNum = mysqli_real_escape_string($db, $_POST['terNum']);

//Territory Type
$terType = mysqli_real_escape_string($db, $_POST['terType']);

//Check Congregation Pin
$checkPinQuery = $db->query("SELECT * FROM users WHERE pin = '$pin'");

//Check What Results The Last Query Gives
$checkPinQueryCheck = $checkPinQuery->num_rows;

//Proceed With Image Upload
if($checkPinQueryCheck > 0){

    //Random Number
    $randNum1 = mt_rand(1000, 999999);
    $randNum11 = mt_rand(1000, 999999);
    $randNum2 = mt_rand(1000, 999999);

    //Image File Type
    $imageFileType = strtolower(pathinfo($file, PATHINFO_EXTENSION));

    //Target Directory
    $targetDir = '../../maps-folder47345/' . $randNum1 . $randNum11 . '_' . strtolower($terType) . '_' . $terNum. '_'. $randNum2 . '.' . $imageFileType;
    $relDBPath = 'maps-folder47345/' . $randNum1 . $randNum11 . '_' . strtolower($terType) . '_' . $terNum. '_'. $randNum2 . '.' . $imageFileType;

    //Check Map Doesnt Exist In DB
    $checkDuplicateMaps = $db->query("SELECT * FROM territory WHERE tNum = '$terNum'");

    //Check The Last Query
    $checkDuplicateMapsCheck = $checkDuplicateMaps->num_rows;

    //If There is no Duplicate
    if($checkDuplicateMapsCheck === 0){

        //Check If File Exist
        if(!file_exists($targetDir)){

            //Save Map To DB
            $saveMap = $db->query("INSERT INTO territory (pin, tNum, tCity, tType, img_url) VALUES ('$pin','$terNum','$terCity','$terType','$relDBPath')");

            $saveMapCheck = $db->affected_rows;

            //If Save Was Succesfull
            if($saveMapCheck > 0){

                //Move File To Server
                if(move_uploaded_file($_FILES['file']['tmp_name'], $targetDir)){
                    
                    echo true;
    
                } else {
    
                    echo false;
    
                }

            }

        } else {

            //Return False
            echo false;

        }

    } else {

        //Return False
        echo false;

    }

}

?>