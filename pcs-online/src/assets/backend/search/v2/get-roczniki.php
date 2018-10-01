<?php 








include('config.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$marka = mysqli_real_escape_string($db,$request->Car->Marka);
$model = mysqli_real_escape_string($db,$request->Car->Model);


$sql = "SELECT MAX(`ROK_PRODUKCJI_DO`), MIN(`ROK_PRODUKCJI_OD`) FROM `Samochody` WHERE 
`MARKA`='". $marka ."' AND 
`MODEL`='" . $model . "';";
$result = mysqli_query($db, $sql);

$roczniki = array();

$i = 0;

$row = mysqli_fetch_assoc($result);

if($row['MAX(`ROK_PRODUKCJI_DO`)'] == "teraz")
{
	$od = $row['MIN(`ROK_PRODUKCJI_OD`)'];
	for($i = 0; $i + $od <= date('Y'); $i+=1)
	{
		$roczniki[$i] = (string)($i + $od);
	}
}
else 
{
	$od = $row['MIN(`ROK_PRODUKCJI_OD`)'];
	$do = $row['MAX(`ROK_PRODUKCJI_DO`)'];
	for($i = 0; $i + $od <= $do; $i+=1)
	{
		$roczniki[$i] = (string)($i + $od);
	}
}


echo json_encode(array("Roczniki" => $roczniki));

?>