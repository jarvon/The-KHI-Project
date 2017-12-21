<?php

//Email Class
class Email {

    //Notify Upcoming Speaker
    function upcomingSpeaker($db, $pin, $reminder){

        $strTime1 = strtotime('',"1970-01-01 00:00:00");

        echo $strTime1;

        //Current Date
        $currentDate = new DateTime($strTime1);

        //echo $currentDate->format("Y-m-d");

        //First & Last Day Of Current week
        //$firstDayOfWeek = $currentDate->modify('this week');
        //$lastDayOfWeek = $currentDate->modify('this week +6 days');

        //Test Output
        //echo $firstDayOfWeek . " " . $lastDayOfWeek;

        //Queries
        //$weekOneQuery = $db->query("SELECT sDate, mDate1, talkNum1, talk1, brother1, cong1, host1 FROM sch_incoming WHERE mDate1 BETWEEN CAST('$firstDayOfWeek', DATE) AND CAST('$lastDayOfWeek', DATE)");
        //$weekTwoQuery = $db->query("");
        //$weekThreeQuery = $db->query("");
        //$weekFourQuery = $db->query("");

    }

}

?>