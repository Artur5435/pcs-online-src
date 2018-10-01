<?php 
                  
include('config.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$marka = mysqli_real_escape_string($db,$request->Car->Marka);
$rocznik = mysqli_real_escape_string($db,$request->Car->Rocznik);
$model = mysqli_real_escape_string($db,$request->Car->Model);

$roczniki = split(" do ", $rocznik);
$sql = "SELECT DISTINCT `SILNIK` , `MOC_KM` FROM `Samochody` WHERE 
`MARKA`='". $marka ."' AND 
`ROK_PRODUKCJI_OD`='". $roczniki[0] . "' AND 
`ROK_PRODUKCJI_DO`='" . $roczniki[1] . "' AND
`MODEL`='" . $model . "';";
$result = mysqli_query($db, $sql);


$silniki = array();

$i = 0;

while($row = mysqli_fetch_assoc($result))
{
	
	
	$silniki[$i] = $row['SILNIK'] . ", " . $row['MOC_KM'];
	$i += 1;
}

echo json_encode(array("Silniki" => $silniki));
?>
			