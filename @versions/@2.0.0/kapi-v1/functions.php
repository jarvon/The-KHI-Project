<?php

//Quick way to escape
function ESC($db, $escaping) {
    
    return mysqli_real_escape_string($db, $escaping);
    
}

//--------------------------------------------------
//Schedule | Functions
//--------------------------------------------------

//Schedule - miniFunc()
function querySch($pin, $type, $id) {
    
    //Schedule Query
    if($type === 'LifeAndMinistry' && $id === '0'){
        
        return "SELECT
                lm_ic1.icm,
                lm_ic1.ic1_name,
                lm_ic1.cp2,
                lm_ic2.ic2_name,
                lm_rv1.rvm,
                lm_rv1.rv1_name,
                lm_rv1.cp3,
                lm_rv2.rv2_name,
                lm_bs1.bsm,
                lm_bs1.bs1_name,
                lm_bs1.cp4,
                lm_bs2.bs2_name,
                lm_talk3.talk3,
                lm_talk3.talk3_name
                
                /* Initial Call  One */
                
                INNER JOIN lm_ic1
                ON life_ministry.id = lm_ic1.lm_id
                
                /* Initial Call  Two */
                
                INNER JOIN lm_ic2
                ON life_ministry.id = lm_ic2.lm_id
                
                /* Return Visit  One */
                
                INNER JOIN lm_rv1
                ON life_ministry.id = lm_rv1.lm_id
                
                /* Return Visit  Two */
                
                INNER JOIN lm_rv2
                ON life_ministry.id = lm_rv2.lm_id
                
                /* Bible Study  One */

                INNER JOIN lm_bs1
                ON life_ministry.id = lm_bs1.lm_id
                
                /* Bible Study  Two */
                
                INNER JOIN lm_bs2
                ON life_ministry.id = lm_bs2.lm_id
                
                /* Talk Two */
                
                INNER JOIN lm_talk3
                ON life_ministry.id = lm_talk3.lm_id
                
                /* WHERE Statement */
                
                WHERE life_ministry.pin = '$pin'
                AND life_ministry.id = lm_chairman.lm_id
                AND life_ministry.id = lm_talk1.lm_id
                AND life_ministry.id = lm_digging.lm_id
                AND life_ministry.id = lm_br.lm_id
                AND life_ministry.id = lm_samplevideos.lm_id
                AND life_ministry.id = lm_ic1.lm_id
                AND life_ministry.id = lm_ic2.lm_id
                AND life_ministry.id = lm_rv1.lm_id
                AND life_ministry.id = lm_rv2.lm_id
                AND life_ministry.id = lm_bs1.lm_id
                AND life_ministry.id = lm_bs2.lm_id
                AND life_ministry.id = lm_talk3.lm_id";
        
        
    } else if ($type === 'LifeAndMinistry'){
        
        return "SELECT
                life_ministry.id,
                life_ministry.start_date,
                life_ministry.end_date,
                life_ministry.wbr,
                life_ministry.song1,
                life_ministry.song2,
                life_ministry.song3,
                life_ministry.videos,
                life_ministry.ep,
                life_ministry.pin,
                lm_chairman.chairman,
                lm_chairman.chairman_name,
                lm_talk1.talk1,
                lm_talk1.talk1_name,
                lm_digging.digging_name,
                lm_br.br,
                lm_br.reading,
                lm_br.cp1,
                lm_br.br_name,
                lm_samplevideos.sv,
                lm_samplevideos.sv_name,
                lm_ic1.icm,
                lm_ic1.ic1_name,
                lm_ic1.cp2,
                lm_ic2.ic2_name,
                lm_rv1.rvm,
                lm_rv1.rv1_name,
                lm_rv1.cp3,
                lm_rv2.rv2_name,
                lm_bs1.bsm,
                lm_bs1.bs1_name,
                lm_bs1.cp4,
                lm_bs2.bs2_name,
                lm_talk3.talk3,
                lm_talk3.talk3_name
                
                /* FROM Statement */
                
                FROM life_ministry
                
                /* Chairman */
                
                INNER JOIN lm_chairman
                ON life_ministry.id = lm_chairman.lm_id
                
                /* Talk One */
                
                INNER JOIN lm_talk1
                ON life_ministry.id = lm_talk1.lm_id
                
                /* Digging */
                
                INNER JOIN lm_digging
                ON life_ministry.id = lm_digging.lm_id
                
                /* Bible Reading */
                
                INNER JOIN lm_br
                ON life_ministry.id = lm_br.lm_id
                
                /* Sample Videos */
                
                INNER JOIN lm_samplevideos
                ON life_ministry.id = lm_samplevideos.lm_id
                
                /* Initial Call  One */
                
                INNER JOIN lm_ic1
                ON life_ministry.id = lm_ic1.lm_id
                
                /* Initial Call  Two */
                
                INNER JOIN lm_ic2
                ON life_ministry.id = lm_ic2.lm_id
                
                /* Return Visit  One */
                
                INNER JOIN lm_rv1
                ON life_ministry.id = lm_rv1.lm_id
                
                /* Return Visit  Two */
                
                INNER JOIN lm_rv2
                ON life_ministry.id = lm_rv2.lm_id
                
                /* Bible Study  One */

                INNER JOIN lm_bs1
                ON life_ministry.id = lm_bs1.lm_id
                
                /* Bible Study  Two */
                
                INNER JOIN lm_bs2
                ON life_ministry.id = lm_bs2.lm_id
                
                /* Talk Two */
                
                INNER JOIN lm_talk3
                ON life_ministry.id = lm_talk3.lm_id
                
                /* WHERE Statement */
                
                WHERE life_ministry.pin = '$pin'
                AND life_ministry.id = '$id'
                AND life_ministry.id = lm_chairman.lm_id
                AND life_ministry.id = lm_talk1.lm_id
                AND life_ministry.id = lm_digging.lm_id
                AND life_ministry.id = lm_br.lm_id
                AND life_ministry.id = lm_samplevideos.lm_id
                AND life_ministry.id = lm_ic1.lm_id
                AND life_ministry.id = lm_ic2.lm_id
                AND life_ministry.id = lm_rv1.lm_id
                AND life_ministry.id = lm_rv2.lm_id
                AND life_ministry.id = lm_bs1.lm_id
                AND life_ministry.id = lm_bs2.lm_id
                AND life_ministry.id = lm_talk3.lm_id";
        
    }
    
    
    
}

//Get Schedule - func()
function getSch($db, $pin, $type, $id){
    
    //Schedule Query
    if($type === 'LifeAndMinistry' && $id == 0){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_lm WHERE pin = '$pin' ORDER BY sDate ASC");
        
    } else if($type === 'LifeAndMinistry'){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_lm WHERE pin = '$pin' AND id = '$id'");
        
    } else if($type === 'attend' && $id == 0){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_attendants WHERE pin = '$pin' ORDER BY sDate ASC");
        
    } else if($type === 'attend'){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_attendants WHERE pin = '$pin' AND id = '$id'");
        
    } else if($type === 'incoming' && $id == 0){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_incoming WHERE pin = '$pin' ORDER BY sDate ASC");
        
    } else if($type === 'incoming'){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_incoming WHERE pin = '$pin' AND id = '$id'");
        
    } else if($type === 'outgoing' && $id == 0){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_outgoing WHERE pin = '$pin' ORDER BY sDate ASC");
        
    } else if($type === 'outgoing'){
        
        //Schedule Query
        $schedules = $db->query("SELECT * FROM sch_outgoing WHERE pin = '$pin' AND id = '$id'");
        
    }
    
    if($schedules) {
        
        //Empty Array
        $schArray = array();
        
        //Loop through the schedules OBJ
        while($schedule = $schedules->fetch_assoc()) {
            
            $schArray[] = $schedule;
            
        }
        
        //Encode the Schedule into JSON
        echo json_encode($schArray);
        
    }
    
}

//Get S.M - func()
function getSource($db, $sourceId){
    
    if($sourceId == 0){
        
        //Query Source Material
        $query = $db->query("SELECT meeting_material.* FROM meeting_material LEFT OUTER JOIN sch_lm ON meeting_material.mm_sdate = sch_lm.sDate WHERE sch_lm.sDate IS NULL");

        //Empty Array
        $sourceArray = array();

        //Loop Through Source
        while($source = $query->fetch_assoc()) {

            $sourceArray[] = $source;

        }

        //Encode The Source Into JSON
        echo json_encode($sourceArray, JSON_PRETTY_PRINT);
        
    } else {
        
        //Query Source Material
        $query = $db->query("SELECT * FROM meeting_material WHERE id = '$sourceId'");

        //Empty Array
        $sourceArray = array();

        //Loop Through Source
        while($source = $query->fetch_assoc()) {

            $sourceArray[] = $source;

        }

        //Encode The Source Into JSON
        echo json_encode($sourceArray, JSON_PRETTY_PRINT);
        
    }
    
    
}

//Get Friends - func()
function getFriends($db, $pin, $type){
    
    //Query Based On Type
    if($type == 'all'){
        
        //Query: All
        $query = $db->query("SELECT * FROM sub_users WHERE pin = '$pin'");
        
    } else if($type == 'brothers'){
        
        //Query: Brothers
        $query = $db->query("SELECT full_name FROM sub_users WHERE pin = '$pin' AND brother = 1");
        
    } else if($type == 'sisters') {
        
        //Query: Sisters
        $query = $db->query("SELECT full_name FROM sub_users WHERE pin = '$pin' AND sister = 1");
        
    }
    
    //Empty Array
        $friendsArray = array();

        //Loop Thru Friends
        while($friends = $query->fetch_assoc()){

            $friendsArray[] = $friends;

        }

        //JSON Encode Data
        echo json_encode($friendsArray, JSON_PRETTY_PRINT);
    
}

?>