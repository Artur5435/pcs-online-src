<?php 








include('config.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$marka = mysqli_real_escape_string($db,$request->Car->Marka);

$sql = "SELECT DISTINCT `ROK_PRODUKCJI_OD` , `ROK_PRODUKCJI_DO` FROM `Samochody` WHERE `MARKA`='". $marka ."'";
$result = mysqli_query($db, $sql);

$roczniki = array();

$i = 0;

while($row = mysqli_fetch_assoc($result))
{
	
	
	$roczniki[$i] = $row['ROK_PRODUKCJI_OD'] . " do " . $row['ROK_PRODUKCJI_DO'];
	$i += 1;
}

echo json_encode(array("Roczniki" => $roczniki));

?>