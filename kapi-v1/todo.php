<?php

$sendTo = 'jarvon99@gmail.com';

function claimAccountEmail($sendTo, $name, $congregation){

    $to = $sendTo;
    $subject = "KHI | Claim Account";

    $txt = '<head>';
    
    //Meta
    $txt .= '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">';
    
    //Style Sheet
    $txt .= '<link rel="stylesheet" type="text/css" href="http://khinfo.us/css/mail.css">';
    
    $txt .= '</head>';
    
    //Body
    $txt .= '<body>';
    
    $txt .= '<div class="head">';
    
    //Logo
    $txt .= '<img class="logo" src="http://khinfo.us/img/kh-logo-3-white.png" />';
    
    $txt .= '</div>';
    
    //Name
    $txt .= '<h1 class="name">'. $name .'<br>'. $congregation .' Congregation</h1>';
    
    //Opening Comment
    $txt .= '<div class="opening-comment">';
    
    $txt .= '<h1>Welcome to KHI</h1>';
    $txt .= 'The elders at your congregation have loving took the time to setup a provision that allows you and other friends at your congregation to view schedules that until now, were only found on the local congregation information board.<br><br>';
    
    $txt .= 'The benefits of this arrangment are numerous. The biggest, however is that since the online schedules are typicaly updated before the printed copies, you will always have the latest schedules right at your finger tips. It is their hope that this will help all in the congregation to better fulfil his/her assignments.<br><br>';
    
    $txt .= 'Please note only schedules will be added to the online information board (khinfo.us). Letters and other sensitive information will remain accesible only at your local congregation.';
    
    $txt .= '<h2>Getting Started</h2>';
    
    $txt .= 'You\'re probaly wondering "How do I access the schedules?". Very easily... but first you have to complete three simple steps. The first and most important is claiming your account.<br><br>';
    
    $txt .= 'After you\'ve done that, you will be able to log into your account which in time will become your central hub for info on your upcoming assignments. You will even recieve an email alert a week before your scheduled part.<br><br>';
    
    $txt .= 'So what are we waiting for! Lets get started.';
    
    $txt .= '<h2>#1 | Claim Your Account</h2>';
    
    $txt .= '<h2>#2 | Save Login Credentials</h2>';
    
    $txt .= '<h2>#3 | Login</h2>';
    
    $txt .= '</div>';
    
    $txt .= '</body>';

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <account@khinfo.us>';
    
    echo $txt;

    //Send Mail
    mail($to, $subject, $txt, $headers);
    
}

claimAccountEmail($sendTo, 'Deontey Gibson', 'Matteson');

?>