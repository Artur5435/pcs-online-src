<?php 

include("config.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$FirstName = mysqli_real_escape_string($db, $request->FirstName);
$LastName = mysqli_real_escape_string($db, $request->LastName);
$City = mysqli_real_escape_string($db, $request->City);
$Street = mysqli_real_escape_string($db, $request->Street);
$NIP = mysqli_real_escape_string($db, $request->NIP);
$PostalCode = mysqli_real_escape_string($db, $request->PostalCode);
$HouseNum = mysqli_real_escape_string($db, $request->HouseNum);
$AppartmentNum = mysqli_real_escape_string($db, $request->AppartmentNum);
$login = mysqli_real_escape_string($db, $request->Login);

$salt =  date("YmdHis");
$pass = md5($pass);

$sql = "SELECT * From `Users_Data` WHERE `LOGIN`='" . $login . "';";
$result = mysqli_query($db, $sql);

if(mysqli_num_rows($result) == 1)
{   
    $sql = "UPDATE `Users_Data` SET
    `MIASTO`='". $City ."', 
    `ULICA`='". $Street ."', 
    `NR_DOMU`='". $HouseNum ."', 
    `NR_LOKALU`='". $AppartmentNum ."', 
    `KOD_POCZTOWY`='". $PostalCode ."', 
    `NIP`='". $NIP ."', 
    `IMIE`='". $FirstName ."', 
    `NAZWISKO`='". $LastName ."' 
    WHERE `LOGIN`='". $login ."';";
    $result = mysqli_query($db, $sql);
    echo json_encode($request);
}
else 
{
    $sql = "INSERT INTO `Users_Data`
    (`LOGIN`, `MIASTO`, `ULICA`, `NR_DOMU`, `NR_LOKALU`, `KOD_POCZTOWY`, `NIP`, `IMIE`, `NAZWISKO`) VALUES 
    ('". $login ."','". $City ."','". $Street ."','". $HouseNum ."','". $AppartmentNum ."','". $PostalCode ."','". $NIP ."','". $FirstName ."','". $LastName ."')";
    $result = mysqli_query($db, $sql);
    echo json_encode($request);
}

//UPDATE Oleje
//SET CENA_HURT = replace(CENA_HURT," z?", "")
mysqli_close($db);

?>

