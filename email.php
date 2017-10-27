<?php
if($_POST){
    $subject = $_POST['enter_subject'];
    $email = $_POST['enter_email'];
    $message = $_POST['enter_text'];

//send email
    mail("danishsehgal2010@gmail.com", "This is an email from:" .$email, $message);
}
?>
