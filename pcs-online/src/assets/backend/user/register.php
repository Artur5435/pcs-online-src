<?php 

include("config.php");

function generateSalt($max = 64) {
	$characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
	$i = 0;
	$salt = "";
	while ($i < $max) {
	    $salt .= $characterList{mt_rand(0, (strlen($characterList) - 1))};
	    $i++;
	}
	return $salt;
}


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$login = mysqli_real_escape_string($db, $request->login);
$email = mysqli_real_escape_string($db, $request->mail);

$check_users = "SELECT `LOGIN` FROM `Users` WHERE `LOGIN`='" . $login . "' OR `E_MAIL`='". $email . "'";
$check = mysqli_query($db, $check_users);
if(mysqli_num_rows($check) == 0)
{
    $pass = mysqli_real_escape_string($db, $request->password);


    $salt =  generateSalt();
    $combo = $salt . $pass;
    $pass = hash('sha512',$combo);

    $sql = "INSERT INTO `Users`
    ( `LOGIN`, 
    `PASSWORD`,
    `E_MAIL`,
    `SALT`,
    `VALIDATED`,
    `ROLE`
    ) VALUES 
    ('".$login."',
    '".$pass."',
    '".$email."',
    '". $salt."',
    '0',
    'USER'
    )";
    
    $u_confirm = $salt . $login;

    $msg = "Dziękujemy za zarejestrowanie się na naszym sklepie!<br>
    Aby potwierdzić założenie konta kliknij 
    <a href='http://liketesty6.cba.pl/confirm.php?u="
    . hash('sha512',$u_confirm) . 
    "'> tutaj</a>";
    $od  = "From: PCS-online \r\n";
	$od .= 'MIME-Version: 1.0'."\r\n";
	$od .= 'Content-type: text/html; charset=utf-8'."\r\n";

    mail($email, "Rejestracja PCS-Online",  $msg , $od);

    $result = mysqli_query($db, $sql);

    mysqli_close($db);

    echo json_encode(array($login ,$pass, $email));
}
else 
{
    mysqli_close($db);
    echo json_encode(array("NOT" ,"", ""));
}

?>