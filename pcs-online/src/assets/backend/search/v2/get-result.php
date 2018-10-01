<?php 
                  
include('config.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$marka = mysqli_real_escape_string($db,$request->Car->Marka);
$rocznik = mysqli_real_escape_string($db,$request->Car->Rocznik);
$model = mysqli_real_escape_string($db,$request->Car->Model);
$silnik = mysqli_real_escape_string($db,$request->Car->Silnik);

$silniki = split(", ", $silnik);

$sql = "SELECT 
`FILTR_OLEJU`, 
`FILTR_PALIWA`, 
`FILTR_POWIETRZA`, 
`FILTR_KABINY`, 
`KOD_REKOMENDOWANEGO_OLEJU`, 
`KOD_POLECANEJ_SZLACHETNOSCI`, 
`KOD_ZGODNY_OLEJ`  
FROM `Samochody` WHERE 
`MARKA`='". $marka ."' AND 
`ROK_PRODUKCJI_OD`<='". $rocznik . "' AND 
`ROK_PRODUKCJI_DO`>='" . $rocznik . "' AND
`MODEL`='" . $model . "' AND
`SILNIK`= '" . $silniki[0] . "' AND 
`MOC_KM`='" . $silniki[1] . "'
;";
$result = mysqli_query($db, $sql);


$wynik = array();

$i = 0;

while($row = mysqli_fetch_assoc($result))
{
	$filtryo = split("#", $row['FILTR_OLEJU']);
	array_splice($filtryo, 0,1);
	$filtrypa = split("#", $row['FILTR_PALIWA']);
	array_splice($filtrypa, 0,1);
	$filtrypo = split("#", $row['FILTR_POWIETRZA']);
	array_splice($filtrypo, 0,1);
	$filtryk = split("#", $row['FILTR_KABINY']);
	array_splice($filtryk, 0,1);
	$oleje = split("#", $row['KOD_ZGODNY_OLEJ']);
	array_splice($oleje, 0,1);
	$oleje_rek = split("#", $row['KOD_REKOMENDOWANEGO_OLEJU']);
	array_splice($oleje_rek, 0,1);
	$oleje_pol = split("#", $row['KOD_POLECANEJ_SZLACHETNOSCI']);
	array_splice($oleje_pol, 0,1);
	$wynik = array(
		"Filtry_oleju" => $filtryo,
		"Filtry_paliwa" => $filtrypa,
		"Filtry_powietrza" => $filtrypo,
		"Filtry_kabiny" => $filtryk,
		"Olej_polecana_szlach" => $oleje_pol,
		"Oleje_Rekomendowane" => $oleje_rek,
		"Oleje_zgodne_szlach" => $oleje
	);
	$i += 1;
}

echo json_encode( $wynik);
?>
			