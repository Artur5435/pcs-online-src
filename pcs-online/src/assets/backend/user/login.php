<?php 

include("config.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$login = mysqli_real_escape_string($db, $request->login );
$pass = mysqli_real_escape_string($db, $request->password);


$sql = "SELECT `LOGIN`, `PASSWORD`, `SALT`, `E_MAIL`, `VALIDATED` From `Users` WHERE `LOGIN`='" . $login . "';";

$result = mysqli_query($db, $sql);

if(mysqli_num_rows($result) == 1)
{
    $row = mysqli_fetch_assoc($result);
    if($row['VALIDATED'] != 0)
    {
        $salt = $row['SALT'];
        $hashed_pwd = $row['PASSWORD'];
        $check_pwd = $salt . $pass;
        $check_hash = hash('sha512', $check_pwd);
        if($check_hash == $hashed_pwd)
        {
            echo json_encode(array($login ,'good', $row['E_MAIL']));
        }
        else 
        {
            echo json_encode(array('', '', ''));
        }
    }
    else 
    {
        echo json_encode(array("" ,"", ""));
    }
}
else 
{
    echo json_encode(array("" ,"", ""));
}
mysqli_close($db);
//UPDATE Oleje
//SET CENA_HURT = replace(CENA_HURT," z?", "")


?>

