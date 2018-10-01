<?php 

include("config.php");

$oleje = "SELECT `PRODUCENT`, `KOD_PRODUKTU`, `TYP_PRODUKTU`, `CENA_SPRZEDAZ`, `NAZWA`, `OPIS`  FROM `Filtry` WHERE `TYP_PRODUKTU`='FILTR PALIWA'";
$result = mysqli_query($db, $oleje);


$i = 0;

$oil_json = array(mysqli_num_rows($result));

while($row = mysqli_fetch_assoc($result)) {
    $oil_json[$i] = array(
        "Producent"=> (string) $row['PRODUCENT'], 
        "ID" => (string)$row['KOD_PRODUKTU'],
        "TypProduktu" => (string)$row['TYP_PRODUKTU'], 
        "Ilosc" => 1,
        "CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
        "Nazwa" => (string) $row['NAZWA'],
        "Opis" => (string) $row['OPIS']
     ) ;
	$i += 1;
}

header('Charset: utf-8');
$x = json_encode($oil_json);
echo $x;

?>