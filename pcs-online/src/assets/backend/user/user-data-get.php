<?php 

include("config.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$login = mysqli_real_escape_string($db,$request->Login);


$sql = "SELECT * FROM `Users_Data` WHERE `LOGIN`='". $login ."'";
$result = mysqli_query($db, $sql);

if(mysqli_num_rows($result) == 1)
{   
    
    $row = mysqli_fetch_assoc ($result);
    $data = array(
        "FirstName" => (string)($row['IMIE'])  ,
        "LastName" => (string) $row["NAZWISKO"],
        "City" => (string)$row["MIASTO"],
        "Street" => (string) $row["ULICA"],
        "NIP" => (string) $row["NIP"],
        "PostalCode" => (string)  $row["KOD_POCZTOWY"],
        "HouseNum" => (string)  $row["NR_DOMU"] ,
        "AppartmentNum" => (string)  $row["NR_LOKALU"] ,
        "Login" => (string)  $login ) ;
    echo json_encode($data);
}
else 
{
    echo json_encode(array(
        "FirstName" => ""  ,
        "LastName" => "",
        "City" => "",
        "Street" => "",
        "NIP" => "",
        "PostalCode" => "",
        "HouseNum" => "" ,
        "AppartmentNum" =>"" ,
        "Login" => $login )) ;
}
mysqli_close($db);
//UPDATE Oleje
//SET CENA_HURT = replace(CENA_HURT," z?", "")


?>

