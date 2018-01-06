<?php

//-------------------------
//Allow External Access
//-------------------------

//Only Allow Main Website
header('Access-Control-Allow-Origin: http://mykhinfo.com');

//-------------------------
//Database
//-------------------------
include 'database.php';

//Database Functions
include 'functions.php';

//External Classes
include 'classes/email.php';

//-------------------------
//Example KAPI Query
//-------------------------

/*

    //Plain JQuery | $ajax({});
    type: 'GET' || 'POST' || 'PUT' || 'DELETE',
    data: {
        pin: 1234,
        task: 'login'
    }
    
    //AngularJS | $http({});
    method: 'GET' || 'POST' || 'PUT' || 'DELETE',
    params: {
        pin: 1234,
        task: 'login'
    }
    
*/

//--------------------------------------------------
//Init Request METHOD
//--------------------------------------------------

$METHOD = $_SERVER['REQUEST_METHOD'];

//--------------------------------------------------
//Init GET values
//--------------------------------------------------

//Login
$pin = '';
$email = '';
$password = '';

//Task
$task = '';
$type = '';

//Post
$id = '';
$sourceId = '';

//--------------------------------------------------
//Parameters
//--------------------------------------------------

//Pin
if(!empty($_GET['pin'])){
    
    //Congregation Pin
    $pin = mysqli_real_escape_string($db, $_GET['pin']);
    
}

//Email
if(!empty($_GET['email'])){
    
    $email = mysqli_real_escape_string($db, $_GET['email']);    
    
}

//Password
if(!empty($_GET['password'])){
    
    $password = mysqli_real_escape_string($db, $_GET['password']);
    
}

//Task
if(!empty($_GET['task'])){
    
    //Database Task
    $task = mysqli_real_escape_string($db, $_GET['task']);
    
}

//Type
if(!empty($_GET['type'])){
    
    //Schedule Type
    $type = mysqli_real_escape_string($db, $_GET['type']);
    
}

//ID
if(!empty($_GET['id'])){
    
    $id = mysqli_real_escape_string($db, $_GET['id']);
    
}

//Source Id
if(!empty($_GET['sourceId'])){
    
    $sourceId = mysqli_real_escape_string($db, $_GET['sourceId']);
    
}

//--------------------------------------------------
//Return Task Functions
//--------------------------------------------------

//-------------------------
//Task: Login - Guest
//-------------------------
if($task === 'login'){
    
    //Include Task File
    include 'task/login.php';
    
};

//-------------------------
//Task: Login - Admin
//-------------------------
if($task === 'loginAdmin'){
    
    //Login Admin
    include 'task/login-admin.php';
    
};

if($task === 'getAdminPin'){
    
    $getPinQuery = $db->query("SELECT pin FROM users WHERE email = '$email'");
    
    $adminPin = $getPinQuery->fetch_assoc();
    
    echo $adminPin['pin'];
    
};

//-------------------------
//Task: Login - Master
//-------------------------
if($task === 'loginMaster'){
    
    $loginQuery = $db->query("SELECT * FROM master WHERE email = '$email' AND pass = '$password'");
    
    $loggedIn = $loginQuery->num_rows;
    
    if($loggedIn == true){
        
        //Return True | Successful
        echo 'true';
        
    } else {
        
        //Return False | Denied
        echo 'false';
        
    }
    
};

//-------------------------
//Task: Send Mail
//-------------------------
if($task === 'sendMail'){

    //Init: Email Class
    $email = new Email;

    //Send Email
    $email->upcomingSpeaker($db, 1914, "My First Message");

}

//-------------------------
//Task: Source Material
//-------------------------
if($task === 'getSource') {
    
    getSource($db, $sourceId);
    
};

if($task === 'getMasterSource'){
    
    //Query Source Material
    $query = $db->query("SELECT * FROM meeting_material");

    //Empty Array
    $sourceArray = array();

    //Loop Through Source
    while($source = $query->fetch_assoc()) {

        $sourceArray[] = $source;

    }

    //Encode The Source Into JSON
    echo json_encode($sourceArray, JSON_PRETTY_PRINT);
    
};

//-------------------------
//Task: Get Friends
//-------------------------
if($task === 'getFriends') {
    
    getFriends($db, $pin, $type);
    
};

//-------------------------
//Task: Name Check
//-------------------------

if($task === 'nameCheck') {
    
    $name = mysqli_real_escape_string($db, $_GET['name']);
    
    $checkQuery = $db->query("SELECT * FROM sub_users WHERE full_name LIKE '%$name%'");
    
    $check = $checkQuery->num_rows;
    
    if($check === 0){
        
        echo "new";
        
    } else if($check >= 1) {
        
        echo "saved";
        
    }
    
}

//-------------------------
//Task: AddFriend
//-------------------------

if($task === 'addFriend') {
    
    $name = mysqli_real_escape_string($db, $_GET['name']);
    $brother = mysqli_real_escape_string($db, $_GET['brother']);
    $sister = mysqli_real_escape_string($db, $_GET['sister']);
    
    //Second Pre-Check
    $preCheck = $db->query("SELECT full_name FROM sub_users WHERE full_name = '$name'");
    
    $check = $preCheck->num_rows;
    
    if($check >= 1) {
        
        //Error
        echo 'This Friend Exist';
        
    } else if($check === 0) {
        
        $addFriend = $db->query("INSERT INTO sub_users VALUES ('','$name','$pin','0','$brother','$sister','','')");
        
        $addCheck = $db->affected_rows;
        
        if($addCheck >= 1) {
            
            echo 'added';
            
        } else if($addCheck === 0) {
            
            //Error
            echo 'error';
            
        }
        
    }
    
}

//--------------------------------------------------
//Return Schedules Functions
//--------------------------------------------------

if($task === 'preCheck'){
    
    if($type === 'attend'){
        
        $sDate = mysqli_real_escape_string($db, $_GET['sDate']);
        
        $query = $db->query("SELECT sDate FROM sch_attendants WHERE MONTH(sDate) = MONTH('$sDate')");
        
        $queryCheck = $query->num_rows;
        
        if($queryCheck === 1){
            
            echo 'Exist';
            
        } else {
            
            echo 'New';
            
        }
        
    } else if($type === 'material'){
        
        $sDate = ESC($db, $_GET['sDate']);
        $eDate = ESC($db, $_GET['eDate']);
        
        $query = $db->query("SELECT * FROM meeting_material WHERE mm_sdate = '$sDate' AND mm_edate = '$eDate'");
        
        $check = $query->num_rows;
        
        if($check === 1){
            
            echo 'mmOld';
            
        } else {
            
            echo 'mmNew';
            
        }
        
    } else if($type === 'incoming'){
        
        $sDate = ESC($db, $_GET['sDate']);
        
        $query = $db->query("SELECT * FROM sch_incoming WHERE DATE(sDate) = DATE('$sDate')");
        
        $check = $query->num_rows;
        
        if($check === 1){
            
            echo 'old';
            
        } else {
            
            echo 'new';
            
        }
        
    } else if($type === 'outgoing'){
        
        $sDate = ESC($db, $_GET['sDate']);
        
        $query = $db->query("SELECT * FROM sch_outgoing WHERE DATE(sDate) = DATE('$sDate')");
        
        $check = $query->num_rows;
        
        if($check === 1){
            
            echo 'old';
            
        } else {
            
            echo 'new';
            
        }
        
    }
    
}

if($task === 'getAllSchedules'){

    //!!Fix this! \/
    if($type === 'LifeAndMinistry') {

        //Return Schedules
        getSch($db, $pin, $type, $id);

    } else if($type === 'attend'){
        
        //Return Schedules
        getSch($db, $pin, $type, $id);
        
    } else if($type === 'incoming'){
        
        //Return Schedules
        getSch($db, $pin, $type, $id);
        
    } else if($type === 'outgoing'){
        
        //Return Schedules
        getSch($db, $pin, $type, $id);
        
    }

};

if($task === 'getSingleSchedule'){

    //!!Fix this! \/
    if($type === 'LifeAndMinistry') {

        //Return Schedules
        getSch($db, $pin, $type, $id);

    } else if($type === 'attend'){
        
        //Return Schedules
        getSch($db, $pin, $type, $id);
        
    } else if($type === 'incoming'){
        
        //Return Schedules
        getSch($db, $pin, $type, $id);
        
    } else if($type === 'outgoing'){
        
        //Return Schedules
        getSch($db, $pin, $type, $id);
        
    }

};

if($task === 'getTodays'){
    
    if($type === 'LifeAndMinistry'){
        
        //Get Date
        $date = ESC($db, $_GET['date']);
        
        //Query
        $query = $db->query("SELECT * FROM sch_lm WHERE DATE('$date') BETWEEN DATE(sDate) AND DATE(eDate)");
        
        //Empty Array()
        $schArray = array();
        
        while($sch = $query->fetch_assoc()){
            
            $schArray[] = $sch;
            
        }
        
        echo json_encode($schArray);
        
    } else if($type === 'attend'){
        
        $date = ESC($db, $_GET['date']);
        
        $query = $db->query("SELECT * FROM sch_attendants WHERE MONTH(sDate) = MONTH('$date')");
        
        $schArray = array();
        
        while($sch = $query->fetch_assoc()){
            
            $schArray[] = $sch;
            
        }
        
        echo json_encode($schArray);
        
    }
    
}

//--------------------------------------------------
//Save Schedules Task
//--------------------------------------------------

if($task === 'save'){
    
    //Add Material | Master Only
    if($type === 'material'){
        
        $sDate = ESC($db, $_GET['sDate']);
        $eDate = ESC($db, $_GET['eDate']);
        $wbr = ESC($db, $_GET['wbr']);
        $song1 = ESC($db, $_GET['song1']);
        $talk1 = ESC($db, $_GET['talk1']);
        $br = ESC($db, $_GET['br']);
        $videoOption = ESC($db, $_GET['videoOption']);
        $part1 = ESC($db, $_GET['part1']);
        $part1M = ESC($db, $_GET['part1M']);
        $part2 = ESC($db, $_GET['part2']);
        $part2M = ESC($db, $_GET['part2M']);
        $part3 = ESC($db, $_GET['part3']);
        $part3M = ESC($db, $_GET['part3M']);
        $song2 = ESC($db, $_GET['song2']);
        $ep = ESC($db, $_GET['ep']);
        $local = ESC($db, $_GET['local']);
        $localTime = ESC($db, $_GET['localTime']);
        $talk4 = ESC($db, $_GET['talk4']);
        $talk4Time = ESC($db, $_GET['talk4Time']);
        $cbs = ESC($db, $_GET['cbs']);
        $song3 = ESC($db, $_GET['song3']);
        
            
        $query = $db->query("INSERT INTO meeting_material VALUES ('','','$sDate','$eDate','$wbr','$song1','$talk1','$br','$videoOption','$part1','$part1M','$part2','$part2M','$part3','$part3M','$song2','$ep','$local','$talk4','$cbs','$song3','$localTime','$talk4Time')");

        $check = $db->affected_rows;

        if($check >= 1){

            echo 'saved';

        } else {

            echo 'error';

        }
        
    }
    
    //Save OR Update Schedule
    if($type === 'LifeAndMinistry'){
        
        /////////////////////////////////////
        /* New Life And Ministry Schedule */
        ///////////////////////////////////
        
        //-------------------------------------//
        /* Participants | Easy Read Var Names */
        //-----------------------------------//
        
        /* Opening Comments */
        $chairman = mysqli_real_escape_string($db, $_GET['chairman']);
        
        /* Treasures From Gods Word */
        $talk1 = mysqli_real_escape_string($db, $_GET['talk1']);
        $digging = mysqli_real_escape_string($db, $_GET['digging']);
        $reading = mysqli_real_escape_string($db, $_GET['reading']);
        $cp1 = mysqli_real_escape_string($db, $_GET['cp1']);
        
        /* Apply Yourself To The Field Ministry */
        $video = mysqli_real_escape_string($db, $_GET['video']);
        $initial1 = mysqli_real_escape_string($db, $_GET['initial1']);
        $initial2 = mysqli_real_escape_string($db, $_GET['initial2']);
        $cp2 = mysqli_real_escape_string($db, $_GET['cp2']);
        $return1 = mysqli_real_escape_string($db, $_GET['return1']);
        $return2 = mysqli_real_escape_string($db, $_GET['return2']);
        $cp3 = mysqli_real_escape_string($db, $_GET['cp3']);
        $bible1 = mysqli_real_escape_string($db, $_GET['bible1']);
        $bible2 = mysqli_real_escape_string($db, $_GET['bible2']);
        $cp4 = mysqli_real_escape_string($db, $_GET['cp4']);
        
        /* Living as Christians */
        $local = mysqli_real_escape_string($db, $_GET['local']);
        $talk4 = mysqli_real_escape_string($db, $_GET['talk3']);
        $cbs = mysqli_real_escape_string($db, $_GET['cbs']);
        $cbsr = mysqli_real_escape_string($db, $_GET['cbsr']);
        
        
        //Source Material: id
        $sourceId = mysqli_real_escape_string($db, $_GET['id']);
        
        //Source Query
        $sourceQuery = $db->query("SELECT * FROM meeting_material WHERE id = '$sourceId'");
        
        //Time Query
        $timeQuery = $db->query("SELECT * FROM lm_time WHERE pin = '$pin'");
        
        
        ///////////////////////////////////////////
        /* Future Note: Add more prechecks here */
        /////////////////////////////////////////
        
        
        //----------------------------------------//
        /* Source Material | Easy Read Var Names */
        //--------------------------------------//
        
        //Save Source Material To Local Var
        $source = $sourceQuery->fetch_assoc();
        
        //Save Time To Local Var
        $time = $timeQuery->fetch_assoc();
        
        //Start Date
        $sDate = $source['mm_sdate'];
        
        //End Date
        $eDate = $source['mm_edate'];
        
        //WBR
        $wbr = ESC($db, $source['mm_wbr']);
        
        //Song 1
        $song1 = $source['mm_song1'];
        
        //Talk 1
        $talk1M = ESC($db, $source['mm_talk1']);
        
        //Bible Reading
        $readingM = ESC($db, $source['mm_br']);
        
        //Video Option
        $videoOption = $source['video'];
        
        //Initial Call
        $initialN = ESC($db, $source['mm_ic']);
        $initialM = ESC($db, $source['mm_icm']);
        
        //Return Visit
        $returnN = ESC($db, $source['mm_rv']);
        $returnM = ESC($db, $source['mm_rvm']);
        
        //Bible Study
        $bibleN = ESC($db, $source['mm_bs']);
        $bibleM = ESC($db, $source['mm_bsm']);
        
        //Song 2
        $song2 = $source['mm_song2'];
        
        //Extra Part Option
        $epOption = $source['ep'];
        
        //Local Needs
        $localM = ESC($db, $source['mm_ln']);
        
        //Talk 3
        $talk4M = ESC($db, $source['mm_talk3']);
        
        //Bible Study
        $cbsM = ESC($db, $source['mm_cbs']);
        
        //Song 3
        $song3 = $source['mm_song3'];
        
        //LN String Time
        $lnSTime = $source['lnTime'];
        
        //Talk 3 String ime
        $t3STime = $source['t3Time'];
        
        $ocTime = $time['ocTime'];
        
        $t1Time = $time['t1Time'];
        
        $digTime = $time['digTime'];
        
        $brTime = $time['brTime'];
        
        $ayTime = $time['ayTime'];
        
        //Time
        $s2Time = $time['s2Time'];
        
        //Convert Time
        $s2TimeCV = strtotime($s2Time);
        
        //Create Time
        $lnTime = date("H:i", strtotime("+".$lnSTime." minutes", $s2TimeCV));
        
        //Convert Time
        $lnTimeCV = strtotime($lnTime);
        
        //Create Time
        $t3Time = date("H:i", strtotime("+".$t3STime." minutes", $lnTimeCV));
        
        //Bible Study Time
        $bsTime = $time['bsTime'];
        
        //Return Visit Time
        $rvTime = $time['rvTime'];
        
        
        //---------------------------//
        /* Start Upload To Database */
        //-------------------------//
        
        //Check if schedule has been created
        $scheduleQuery = $db->query("SELECT * FROM `sch_lm` WHERE DATE(sDate) = DATE('$sDate') AND DATE(eDate) = DATE('$eDate')");
        
        //Grab Schedule Data
        $scheduleData = $scheduleQuery->fetch_assoc();
        
        //Save Schedule Id
        $schId = $scheduleData['id'];

        //Returns Amount of Rows That match the query
        $scheduleCheck = $scheduleQuery->num_rows;

        //Start Upload
        if($scheduleCheck == 0) {

            //Life and Ministry
            $lmQuery = $db->query("INSERT INTO sch_lm VALUES ('','$pin','$sourceId','$sDate','$eDate','$wbr','$song1','$chairman','$talk1M','$talk1','$digging','$readingM','$reading','$cp1','$videoOption','$video','$initialN','$initial1','$initial2','$initialM','$cp2','$returnN','$return1','$return2','$returnM','$cp3','$bibleN','$bible1','$bible2','$bibleM','$cp4','$song2','$epOption','$localM','$local','$talk4M','$talk4','$cbsM','$cbs','$cbsr','$song3','$ocTime','$t1Time','$digTime','$brTime','$ayTime','$s2Time','$lnTime','$t3Time','$bsTime','$rvTime','$lnSTime','$t3STime')");

            //Last Inserted ID
            $lm_id = $db->insert_id;

            //----------------------------------------------------//

            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                echo "Success";

            } else {

                echo "Failed - Save";
                $db->close();

            } /* Save Check */

        } else {
            
            /* Update Schedule | Life And Ministry */
            $lmQuery = $db->query("UPDATE sch_lm 
            SET song1 = '$song1', 
            chairmanN = '$chairman', 
            talk1 = '$talk1M', 
            talk1N = '$talk1', 
            talk2N = '$digging', 
            reading = '$readingM', 
            readingN = '$reading', 
            cp1 = '$cp1', 
            video = '$videoOption', 
            videoN = '$video', 
            initialCall = '$initialN', 
            initialN1 = '$initial1', 
            initialN2 = '$initial2', 
            initialM = '$initialM', 
            cp2 = '$cp2', 
            returnVisit = '$returnN', 
            returnN1 = '$return1', 
            returnN2 = '$return2', 
            returnM = '$returnM', 
            cp3 = '$cp3', 
            bibleStudy = '$bibleN', 
            bibleN1 = '$bible1', 
            bibleN2 = '$bible2', 
            bibleM = '$bibleM', 
            cp4 = '$cp4',
            song2 = '$song2', 
            ep = '$epOption', 
            talk3 = '$localM', 
            talk3N = '$local', 
            talk4 = '$talk4M', 
            talk4N = '$talk4', 
            cbs = '$cbsM', 
            cbsN = '$cbs', 
            cbsR = '$cbsr', 
            song3 = '$song3',
            ocTime = '$ocTime',
            t1Time = '$t1Time',
            digTime = '$digTime',
            brTime = '$brTime',
            ayTime = '$ayTime',
            s2Time = '$s2Time',
            lnTime = '$lnTime',
            t3Time = '$t3Time',
            bsTime = '$bsTime',
            rvTime = '$rvTime',
            lnActTime = '$lnSTime',
            t3ActTime = '$t3STime' WHERE id = '$schId' AND pin = '$pin'");
            
            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                $fmSDate = date('M jS, Y', strtotime($sDate));
                $fmEDate = date('M jS, Y', strtotime($eDate));

                echo "Success";

                //Send Update Email
                $to = 'test@mykhinfo.com';
                $subject = "Updated Life And Ministry Schedule";

                $htmlContent = '
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Update Life And Ministry</title>
                    <style>

                    /* Fonts */
                    @import url("https://fonts.googleapis.com/css?family=Heebo:100,200,400");

                    body {
                        margin: 0;
                        font-family: "Heebo", sans-serif;
                        font-weight: 400;
                    }

                    h1, h3 {
                        margin: 0px 5px 0px 5px;
                        padding: 0px 5px 0px 5px;
                        text-align: center;
                        color: #65605e;
                    }

                    p {
                        margin: 5px;
                        padding: 5px;
                        text-align: center;
                        border-top: 2px solid #65605e;
                    }

                    a.boldLink {
                        display: block;
                        font-size: 20px;
                        margin: 10px 0;
                        padding: 10px;
                        background-color: #dfdfdf;
                        text-decoration: none;
                        text-align: center;
                        color: #65605e;
                    }

                    .logo {
                        width: 100%;
                        height: 100px;
                        background-color: #799FCC;
                        padding: 5px 0;
                        margin-bottom: 55px;
                    }

                    .logo img {
                        display: block;
                        height: 150px;
                        width: auto;
                        margin: 0 auto;
                    }

                    </style>
                </head>
                <body>

                    <div class="logo">
                        <img src="http://mykhinfo.com/img/logo/2018/Logo-2018-500x500-Blue.png" alt="The MyKHInfo Logo">
                    </div>

                    <h1>Updated Schedule</h1>
                    <h3>Life And Ministry</h3>

                    <p>
                        <b style="font-size: 18px">A schedule on your information board has been modifed.</b><br><br>

                        <b style="display: block; font-size: 20px; background-color: #2878bb; padding: 5px; color: white">Week Of</b>
                        <b style="display: block; font-size: 20px; background-color: #799FCC; padding: 5px; color: white">'. $fmSDate .' - '. $fmEDate .'</b>
                        <br>


                        For your convienence we\'ve included a link to the schedule.
                        Please look over it well and we encourage all to prepare well for any upcoming assignments.
                    </p>

                    <!-- Login Link -->
                    <a class="boldLink" href="http://mykhinfo.com">Click Here To View Schedule!</a>
                    
                </body>
                </html>';

                // Set content-type header for sending HTML email
                $headers = "MIME-Version: 1.0" . "\r\n";
                $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

                // Additional headers
                $headers .= 'From: My Kingdom Hall Info<sender@example.com>' . "\r\n";
                //$headers .= 'Cc: welcome@example.com' . "\r\n";
                //$headers .= 'Bcc: welcome2@example.com' . "\r\n";

                // Send email
                if(mail($to,$subject,$htmlContent,$headers)){

                    $successMsg = 'Email has sent successfully.';

                } else {

                    $errorMsg = 'Email sending fail.';

                }

            } else {

                echo "Failed";
                $db->close();

            } /* Save Check */
            
        } /* Schedule Check */

    };
    
    //Save or Update Attendants
    if($type === 'attend') {
        
        //////////////////////////////
        /* New Attendants Schedule */
        ////////////////////////////
        
        //-------------------------------------//
        /* Participants | Easy Read Var Names */
        //-----------------------------------//
        
        //Start Date
        $sDate = mysqli_real_escape_string($db, $_GET['sDate']);
        
        //Mid Dates 1 - 10
        $mDate1 = mysqli_real_escape_string($db, $_GET['mDate1']);
        $mDate2 = mysqli_real_escape_string($db, $_GET['mDate2']);
        $mDate3 = mysqli_real_escape_string($db, $_GET['mDate3']);
        $mDate4 = mysqli_real_escape_string($db, $_GET['mDate4']);
        $mDate5 = mysqli_real_escape_string($db, $_GET['mDate5']);
        $mDate6 = mysqli_real_escape_string($db, $_GET['mDate6']);
        $mDate7 = mysqli_real_escape_string($db, $_GET['mDate7']);
        $mDate8 = mysqli_real_escape_string($db, $_GET['mDate8']);
        $mDate9 = mysqli_real_escape_string($db, $_GET['mDate9']);
        $mDate10 = mysqli_real_escape_string($db, $_GET['mDate10']);
        
        //Attend 1 - 20
        $attend1 = mysqli_real_escape_string($db, $_GET['attend1']);
        $attend2 = mysqli_real_escape_string($db, $_GET['attend2']);
        $attend3 = mysqli_real_escape_string($db, $_GET['attend3']);
        $attend4 = mysqli_real_escape_string($db, $_GET['attend4']);
        $attend5 = mysqli_real_escape_string($db, $_GET['attend5']);
        $attend6 = mysqli_real_escape_string($db, $_GET['attend6']);
        $attend7 = mysqli_real_escape_string($db, $_GET['attend7']);
        $attend8 = mysqli_real_escape_string($db, $_GET['attend8']);
        $attend9 = mysqli_real_escape_string($db, $_GET['attend9']);
        $attend10 = mysqli_real_escape_string($db, $_GET['attend10']);
        $attend11 = mysqli_real_escape_string($db, $_GET['attend11']);
        $attend12 = mysqli_real_escape_string($db, $_GET['attend12']);
        $attend13 = mysqli_real_escape_string($db, $_GET['attend13']);
        $attend14 = mysqli_real_escape_string($db, $_GET['attend14']);
        $attend15 = mysqli_real_escape_string($db, $_GET['attend15']);
        $attend16 = mysqli_real_escape_string($db, $_GET['attend16']);
        $attend17 = mysqli_real_escape_string($db, $_GET['attend17']);
        $attend18 = mysqli_real_escape_string($db, $_GET['attend18']);
        $attend19 = mysqli_real_escape_string($db, $_GET['attend19']);
        $attend20 = mysqli_real_escape_string($db, $_GET['attend20']);
        
        //Mics 1 - 30
        $mic1 = mysqli_real_escape_string($db, $_GET['mic1']);
        $mic2 = mysqli_real_escape_string($db, $_GET['mic2']);
        $mic3 = mysqli_real_escape_string($db, $_GET['mic3']);
        $mic4 = mysqli_real_escape_string($db, $_GET['mic4']);
        $mic5 = mysqli_real_escape_string($db, $_GET['mic5']);
        $mic6 = mysqli_real_escape_string($db, $_GET['mic6']);
        $mic7 = mysqli_real_escape_string($db, $_GET['mic7']);
        $mic8 = mysqli_real_escape_string($db, $_GET['mic8']);
        $mic9 = mysqli_real_escape_string($db, $_GET['mic9']);
        $mic10 = mysqli_real_escape_string($db, $_GET['mic10']);
        $mic11 = mysqli_real_escape_string($db, $_GET['mic11']);
        $mic12 = mysqli_real_escape_string($db, $_GET['mic12']);
        $mic13 = mysqli_real_escape_string($db, $_GET['mic13']);
        $mic14 = mysqli_real_escape_string($db, $_GET['mic14']);
        $mic15 = mysqli_real_escape_string($db, $_GET['mic15']);
        $mic16 = mysqli_real_escape_string($db, $_GET['mic16']);
        $mic17 = mysqli_real_escape_string($db, $_GET['mic17']);
        $mic18 = mysqli_real_escape_string($db, $_GET['mic18']);
        $mic19 = mysqli_real_escape_string($db, $_GET['mic19']);
        $mic20 = mysqli_real_escape_string($db, $_GET['mic20']);
        $mic21 = mysqli_real_escape_string($db, $_GET['mic21']);
        $mic22 = mysqli_real_escape_string($db, $_GET['mic22']);
        $mic23 = mysqli_real_escape_string($db, $_GET['mic23']);
        $mic24 = mysqli_real_escape_string($db, $_GET['mic24']);
        $mic25 = mysqli_real_escape_string($db, $_GET['mic25']);
        $mic26 = mysqli_real_escape_string($db, $_GET['mic26']);
        $mic27 = mysqli_real_escape_string($db, $_GET['mic27']);
        $mic28 = mysqli_real_escape_string($db, $_GET['mic28']);
        $mic29 = mysqli_real_escape_string($db, $_GET['mic29']);
        $mic30 = mysqli_real_escape_string($db, $_GET['mic30']);
        
        //Platform 1 - 10
        $plat1 = mysqli_real_escape_string($db, $_GET['plat1']);
        $plat2 = mysqli_real_escape_string($db, $_GET['plat2']);
        $plat3 = mysqli_real_escape_string($db, $_GET['plat3']);
        $plat4 = mysqli_real_escape_string($db, $_GET['plat4']);
        $plat5 = mysqli_real_escape_string($db, $_GET['plat5']);
        $plat6 = mysqli_real_escape_string($db, $_GET['plat6']);
        $plat7 = mysqli_real_escape_string($db, $_GET['plat7']);
        $plat8 = mysqli_real_escape_string($db, $_GET['plat8']);
        $plat9 = mysqli_real_escape_string($db, $_GET['plat9']);
        $plat10 = mysqli_real_escape_string($db, $_GET['plat10']);
        
        //Sound 1 - 10
        $sound1 = mysqli_real_escape_string($db, $_GET['sound1']);
        $sound2 = mysqli_real_escape_string($db, $_GET['sound2']);
        $sound3 = mysqli_real_escape_string($db, $_GET['sound3']);
        $sound4 = mysqli_real_escape_string($db, $_GET['sound4']);
        $sound5 = mysqli_real_escape_string($db, $_GET['sound5']);
        $sound6 = mysqli_real_escape_string($db, $_GET['sound6']);
        $sound7 = mysqli_real_escape_string($db, $_GET['sound7']);
        $sound8 = mysqli_real_escape_string($db, $_GET['sound8']);
        $sound9 = mysqli_real_escape_string($db, $_GET['sound9']);
        $sound10 = mysqli_real_escape_string($db, $_GET['sound10']);
        
        //Notes 1 - 10
        $note1 = mysqli_real_escape_string($db, $_GET['note1']);
        $note2 = mysqli_real_escape_string($db, $_GET['note2']);
        $note3 = mysqli_real_escape_string($db, $_GET['note3']);
        $note4 = mysqli_real_escape_string($db, $_GET['note4']);
        $note5 = mysqli_real_escape_string($db, $_GET['note5']);
        $note6 = mysqli_real_escape_string($db, $_GET['note6']);
        $note7 = mysqli_real_escape_string($db, $_GET['note7']);
        $note8 = mysqli_real_escape_string($db, $_GET['note8']);
        $note9 = mysqli_real_escape_string($db, $_GET['note9']);
        $note10 = mysqli_real_escape_string($db, $_GET['note10']);
        
        //---------------------------//
        /* Start Upload To Database */
        //-------------------------//
        
        //Check if schedule has been created
        $scheduleQuery = $db->query("SELECT * FROM `sch_attendants` WHERE MONTH(sDate) = MONTH('$sDate')");
        
        //Grab Schedule Data
        $scheduleData = $scheduleQuery->fetch_assoc();
        
        //Save Schedule Id
        $schId = $scheduleData['id'];

        //Returns Amount of Rows That match the query
        $scheduleCheck = $scheduleQuery->num_rows;
        
        //Start Upload
        if($scheduleCheck == 0) {
            
            //Attendants Schedule
            $attenQuery = $db->query("INSERT INTO sch_attendants VALUES ('','$pin','$sDate','$mDate1','$attend1','$attend2','$mic1','$mic2','$mic3','$plat1','$sound1','$note1','$mDate2','$attend3','$attend4','$mic4','$mic5','$mic6','$plat2','$sound2','$note2','$mDate3','$attend5','$attend6','$mic7','$mic8','$mic9','$plat3','$sound3','$note3','$mDate4','$attend7','$attend8','$mic10','$mic11','$mic12','$plat4','$sound4','$note4','$mDate5','$attend9','$attend10','$mic13','$mic14','$mic15','$plat5','$sound5','$note5','$mDate6','$attend11','$attend12','$mic16','$mic17','$mic18','$plat6','$sound6','$note6','$mDate7','$attend13','$attend14','$mic19','$mic20','$mic21','$plat7','$sound7','$note7','$mDate8','$attend15','$attend16','$mic22','$mic23','$mic24','$plat8','$sound8','$note8','$mDate9','$attend17','$attend18','$mic25','$mic26','$mic27','$plat9','$sound9','$note9','$mDate10','$attend19','$attend20','$mic28','$mic29','$mic30','$plat10','$sound10','$note1')");
            
            //----------------------------------------------------//

            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                echo "Success";

            } else {

                echo "Failed";
                $db->close();

            } /* Save Check */
            
        } else {
            
            $attenQuery = $db->query("UPDATE sch_attendants SET
            sDate = '$sDate',
            mDate1 = '$mDate1',
            atten1 = '$attend1',
            atten2 = '$attend2',
            mic1 = '$mic1',
            mic2 = '$mic2',
            mic3 = '$mic3',
            plat1 = '$plat1',
            sound1 = '$sound1',
            note1 = '$note1',
            mDate2 = '$mDate2',
            atten3 = '$attend3',
            atten4 = '$attend4',
            mic4 = '$mic4',
            mic5 = '$mic5',
            mic6 = '$mic6',
            plat2 = '$plat2',
            sound2 = '$sound2',
            note2 = '$note2',
            mDate3 = '$mDate3',
            atten5 = '$attend5',
            atten6 = '$attend6',
            mic7 = '$mic7',
            mic8 = '$mic8',
            mic9 = '$mic9',
            plat3 = '$plat3',
            sound3 = '$sound3',
            note3 = '$note3',
            mDate4 = '$mDate4',
            atten7 = '$attend7',
            atten8 = '$attend8',
            mic10 = '$mic10',
            mic11 = '$mic11',
            mic12 = '$mic12',
            plat4 = '$plat4',
            sound4 = '$sound4',
            note4 = '$note4',
            mDate5 = '$mDate5',
            atten9 = '$attend9',
            atten10 = '$attend10',
            mic13 = '$mic13',
            mic14 = '$mic14',
            mic15 = '$mic15',
            plat5 = '$plat5',
            sound5 = '$sound5',
            note5 = '$note5',
            mDate6 = '$mDate6',
            atten11 = '$attend11',
            atten12 = '$attend12',
            mic16 = '$mic16',
            mic17 = '$mic17',
            mic18 = '$mic18',
            plat6 = '$plat6',
            sound6 = '$sound6',
            note6 = '$note6',
            mDate7 = '$mDate7',
            atten13 = '$attend13',
            atten14 = '$attend14',
            mic19 = '$mic19',
            mic20 = '$mic20',
            mic21 = '$mic21',
            plat7 = '$plat7',
            sound7 = '$sound7',
            note7 = '$note7',
            mDate8 = '$mDate8',
            atten15 = '$attend15',
            atten16 = '$attend16',
            mic22 = '$mic22',
            mic23 = '$mic23',
            mic24 = '$mic24',
            plat8 = '$plat8',
            sound8 = '$sound8',
            note8 = '$note8',
            mDate9 = '$mDate9',
            atten17 = '$attend17',
            atten18 = '$attend18',
            mic25 = '$mic25',
            mic26 = '$mic26',
            mic27 = '$mic27',
            plat9 = '$plat9',
            sound9 = '$sound9',
            note9 = '$note9',
            mDate10 = '$mDate10',
            atten19 = '$attend19',
            atten20 = '$attend20',
            mic28 = '$mic28',
            mic29 = '$mic29',
            mic30 = '$mic30',
            plat10 = '$plat10',
            sound10 = '$sound10',
            note10 = '$note10' WHERE id = '$schId' AND pin = '$pin'");
            
            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                echo "Success";

            } else {

                echo "Failed";
                $db->close();

            } /* Save Check */
            
        }
        
    };
    
    //Save Incoming Speakers
    if($type === 'incoming'){
        
        //Dates
        $sDate = ESC($db, $_GET['sDate']);
        $mDate1 = ESC($db, $_GET['mDate1']);
        $mDate2 = ESC($db, $_GET['mDate2']);
        $mDate3 = ESC($db, $_GET['mDate3']);
        $mDate4 = ESC($db, $_GET['mDate4']);
        $mDate5 = ESC($db, $_GET['mDate5']);
        
        //Talk Number
        $talkNum1 = ESC($db, $_GET['talkNum1']);
        $talkNum2 = ESC($db, $_GET['talkNum2']);
        $talkNum3 = ESC($db, $_GET['talkNum3']);
        $talkNum4 = ESC($db, $_GET['talkNum4']);
        $talkNum5 = ESC($db, $_GET['talkNum5']);
        
        //Talk Title
        $talk1 = ESC($db, $_GET['talk1']);
        $talk2 = ESC($db, $_GET['talk2']);
        $talk3 = ESC($db, $_GET['talk3']);
        $talk4 = ESC($db, $_GET['talk4']);
        $talk5 = ESC($db, $_GET['talk5']);
        
        //Speakers
        $brother1 = ESC($db, $_GET['brother1']);
        $brother2 = ESC($db, $_GET['brother2']);
        $brother3 = ESC($db, $_GET['brother3']);
        $brother4 = ESC($db, $_GET['brother4']);
        $brother5 = ESC($db, $_GET['brother5']);
        
        //Congregations
        $cong1 = ESC($db, $_GET['cong1']);
        $cong2 = ESC($db, $_GET['cong2']);
        $cong3 = ESC($db, $_GET['cong3']);
        $cong4 = ESC($db, $_GET['cong4']);
        $cong5 = ESC($db, $_GET['cong5']);

        //Host
        $host1 = ESC($db, $_GET['host1']);
        $host2 = ESC($db, $_GET['host2']);
        $host3 = ESC($db, $_GET['host3']);
        $host4 = ESC($db, $_GET['host4']);
        $host5 = ESC($db, $_GET['host5']);
        
        //Check if schedule has been created
        $scheduleQuery = $db->query("SELECT * FROM `sch_incoming` WHERE MONTH(sDate) = MONTH('$sDate')");
        
        //Grab Schedule Data
        $scheduleData = $scheduleQuery->fetch_assoc();
        
        //Save Schedule Id
        $schId = $scheduleData['id'];

        //Returns Amount of Rows That match the query
        $scheduleCheck = $scheduleQuery->num_rows;
        
        //Start Upload
        if($scheduleCheck == 0) {
            
            $query = $db->query("INSERT INTO sch_incoming VALUES ('','$pin','$sDate','$mDate1','$talkNum1','$talk1','$brother1','$cong1','$host1','$mDate2','$talkNum2','$talk2','$brother2','$cong2','$host2','$mDate3','$talkNum3','$talk3','$brother3','$cong3','$host3','$mDate4','$talkNum4','$talk4','$brother4','$cong4','$host4','$mDate5','$talkNum5','$talk5','$brother5','$cong5','$host5')");
            
            //----------------------------------------------------//

            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                echo "Success";

            } else {

                echo "Failed";
                $db->close();

            } /* Save Check */
            
        } else {
            
            $query = $db->query("UPDATE sch_incoming
            SET mDate1 = '$mDate1',
            mDate2 = '$mDate2',
            mDate3 = '$mDate3',
            mDate4 = '$mDate4',
            mDate5 = '$mDate5',
            talkNum1 = '$talkNum1',
            talkNum2 = '$talkNum2',
            talkNum3 = '$talkNum3',
            talkNum4 = '$talkNum4',
            talkNum5 = '$talkNum5',
            talk1 = '$talk1',
            talk2 = '$talk2',
            talk3 = '$talk3',
            talk4 = '$talk4',
            talk5 = '$talk5',
            brother1 = '$brother1',
            brother2 = '$brother2',
            brother3 = '$brother3',
            brother4 = '$brother4',
            brother5 = '$brother5',
            cong1 = '$cong1',
            cong2 = '$cong2',
            cong3 = '$cong3',
            cong4 = '$cong4',
            cong5 = '$cong5',
            host1 = '$host1',
            host2 = '$host2',
            host3 = '$host3',
            host4 = '$host4',
            host5 = '$host5' WHERE id = '$schId'");
            
            //----------------------------------------------------//

            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                echo "Success";

            } else {

                echo "Failed";
                $db->close();

            } /* Save Check */
            
        }
        
    }

    //Save Incoming Speakers
    if($type === 'outgoing'){
        
        //Dates
        $sDate = ESC($db, $_GET['sDate']);
        $mDate1 = ESC($db, $_GET['mDate1']);
        $mDate2 = ESC($db, $_GET['mDate2']);
        $mDate3 = ESC($db, $_GET['mDate3']);
        $mDate4 = ESC($db, $_GET['mDate4']);
        $mDate5 = ESC($db, $_GET['mDate5']);
        
        //Talk Number
        $talkNum1 = ESC($db, $_GET['talkNum1']);
        $talkNum2 = ESC($db, $_GET['talkNum2']);
        $talkNum3 = ESC($db, $_GET['talkNum3']);
        $talkNum4 = ESC($db, $_GET['talkNum4']);
        $talkNum5 = ESC($db, $_GET['talkNum5']);
        
        //Talk Title
        $talk1 = ESC($db, $_GET['talk1']);
        $talk2 = ESC($db, $_GET['talk2']);
        $talk3 = ESC($db, $_GET['talk3']);
        $talk4 = ESC($db, $_GET['talk4']);
        $talk5 = ESC($db, $_GET['talk5']);
        
        //Speakers
        $brother1 = ESC($db, $_GET['brother1']);
        $brother2 = ESC($db, $_GET['brother2']);
        $brother3 = ESC($db, $_GET['brother3']);
        $brother4 = ESC($db, $_GET['brother4']);
        $brother5 = ESC($db, $_GET['brother5']);
        
        //Congregations
        $cong1 = ESC($db, $_GET['cong1']);
        $cong2 = ESC($db, $_GET['cong2']);
        $cong3 = ESC($db, $_GET['cong3']);
        $cong4 = ESC($db, $_GET['cong4']);
        $cong5 = ESC($db, $_GET['cong5']);

        //Time
        $time1 = ESC($db, $_GET['time1']);
        $time2 = ESC($db, $_GET['time2']);
        $time3 = ESC($db, $_GET['time3']);
        $time4 = ESC($db, $_GET['time4']);
        $time5 = ESC($db, $_GET['time5']);
        
        //Check if schedule has been created
        $scheduleQuery = $db->query("SELECT * FROM `sch_outgoing` WHERE MONTH(sDate) = MONTH('$sDate')");
        
        //Grab Schedule Data
        $scheduleData = $scheduleQuery->fetch_assoc();
        
        //Save Schedule Id
        $schId = $scheduleData['id'];

        //Returns Amount of Rows That match the query
        $scheduleCheck = $scheduleQuery->num_rows;
        
        //Start Upload
        if($scheduleCheck == 0) {
            
            $query = $db->query("INSERT INTO sch_outgoing VALUES ('','$sDate','$pin','$mDate1','$talkNum1','$talk1','$brother1','$cong1','$time1','$mDate2','$talkNum2','$talk2','$brother2','$cong2','$time2','$mDate3','$talkNum3','$talk3','$brother3','$cong3','$time3','$mDate4','$talkNum4','$talk4','$brother4','$cong4','$time4','$mDate5','$talkNum5','$talk5','$brother5','$cong5','$time5')");
            
            //----------------------------------------------------//

            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                echo "Success";

            } else {

                echo "Failed";
                $db->close();

            } /* Save Check */
            
        } else {
            
            $query = $db->query("UPDATE sch_outgoing
            SET mDate1 = '$mDate1',
            mDate2 = '$mDate2',
            mDate3 = '$mDate3',
            mDate4 = '$mDate4',
            mDate5 = '$mDate5',
            talkNum1 = '$talkNum1',
            talkNum2 = '$talkNum2',
            talkNum3 = '$talkNum3',
            talkNum4 = '$talkNum4',
            talkNum5 = '$talkNum5',
            talk1 = '$talk1',
            talk2 = '$talk2',
            talk3 = '$talk3',
            talk4 = '$talk4',
            talk5 = '$talk5',
            brother1 = '$brother1',
            brother2 = '$brother2',
            brother3 = '$brother3',
            brother4 = '$brother4',
            brother5 = '$brother5',
            congregation1 = '$cong1',
            congregation2 = '$cong2',
            congregation3 = '$cong3',
            congregation4 = '$cong4',
            congregation5 = '$cong5',
            time1 = '$time1',
            time2 = '$time2',
            time3 = '$time3',
            time4 = '$time4',
            time5 = '$time5' WHERE id = '$schId'");
            
            //----------------------------------------------------//

            $saveCheck = $db->affected_rows;

            if($saveCheck >= 1){

                echo "Success";

            } else {

                echo "Failed";
                $db->close();

            } /* Save Check */
            
        }
        
    }
    
}

//--------------------------------------------------
//Update Material Task
//--------------------------------------------------

if($task === 'updateMaterial'){
    
    $sDate = ESC($db, $_GET['sDate']);
    $eDate = ESC($db, $_GET['eDate']);
    $wbr = ESC($db, $_GET['wbr']);
    $song1 = ESC($db, $_GET['song1']);
    $talk1 = ESC($db, $_GET['talk1']);
    $br = ESC($db, $_GET['br']);
    $videoOption = ESC($db, $_GET['videoOption']);
    $part1 = ESC($db, $_GET['part1']);
    $part1M = ESC($db, $_GET['part1M']);
    $part2 = ESC($db, $_GET['part2']);
    $part2M = ESC($db, $_GET['part2M']);
    $part3 = ESC($db, $_GET['part3']);
    $part3M = ESC($db, $_GET['part3M']);
    $song2 = ESC($db, $_GET['song2']);
    $ep = ESC($db, $_GET['ep']);
    $local = ESC($db, $_GET['local']);
    $localTime = ESC($db, $_GET['localTime']);
    $talk4 = ESC($db, $_GET['talk4']);
    $talk4Time = ESC($db, $_GET['talk4Time']);
    $cbs = ESC($db, $_GET['cbs']);
    $song3 = ESC($db, $_GET['song3']);
    
    $query = $db->query("UPDATE meeting_material SET
        mm_sdate = '$sDate',
        mm_edate = '$eDate',
        mm_wbr = '$wbr',
        mm_song1 = '$song1',
        mm_talk1 = '$talk1',
        mm_br = '$br',
        video = '$videoOption',
        mm_ic = '$part1',
        mm_icm = '$part1M',
        mm_rv = '$part2',
        mm_rvm = '$part2M',
        mm_bs = '$part3',
        mm_bsm = '$part3M',
        mm_song2 = '$song2',
        ep = '$ep',
        mm_ln = '$local',
        mm_talk3 = '$talk4',
        mm_cbs = '$cbs',
        mm_song3 = '$song3',
        lnTime = '$localTime',
        t3Time = '$talk4Time' WHERE id = '$sourceId'");

    $check = $db->affected_rows;

    if($check >= 1){

        echo 'saved';

    } else {

        echo 'error';

    }
    
}

?>