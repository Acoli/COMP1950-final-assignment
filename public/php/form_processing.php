<?php

$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$emailTo = "sebastianyong@shaw.ca"; // replace with own email
$emailRegex = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';


if( !isset($email) ||
	!isset($subject) ||
	!isset($message) ){
		die('We are sorry, but there appears to be a problem with the email you submitted.');
}

if(!preg_match($emailRegex, $email)) {
	die('The Email Address you entered does not appear to be valid.');
}

echo 'Email: ' . $email . '</br>';
echo 'subject: ' . $subject . '</br>';
echo 'message: ' . $message. '</br>';
 
mail($emailTo, $subject, $message);  

?>