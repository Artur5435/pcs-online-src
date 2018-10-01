<?php 




include('config.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$marka = mysqli_real_escape_string($db,$request->Car->Marka);

$sql = "SELECT DISTINCT `MODEL` FROM `Samochody` WHERE 
`MARKA`='". $marka ."' ORDER BY `MODEL`;";
$result = mysqli_query($db, $sql);


$modele = array();

$i = 0;

while($row = mysqli_fetch_assoc($result))
{
	
	
	$modele[$i] = $row['MODEL'];
	$i += 1;
}

echo json_encode(array("Modele" => $modele));
?>