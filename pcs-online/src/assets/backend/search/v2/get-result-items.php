<?php 
                  
include('config.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$Filtry_oleju = mysqli_real_escape_string($db,$request->Items->Filtry_oleju);
$Filtry_paliwa = mysqli_real_escape_string($db,$request->Items->Filtry_paliwa);
$Filtry_powietrza = mysqli_real_escape_string($db,$request->Items->Filtry_powietrza);
$Filtry_kabiny = mysqli_real_escape_string($db,$request->Items->Filtry_kabiny);

$Oleje_Rekomendowane = mysqli_real_escape_string($db,$request->Items->Oleje_Rekomendowane);

$Olej_polecana_szlach = mysqli_real_escape_string($db,$request->Items->Olej_polecana_szlach);
$Oleje_zgodne_szlach = mysqli_real_escape_string($db,$request->Items->Oleje_zgodne_szlach);
//echo json_encode();

//OLEJE POLECANE
$sql_oleje = "SELECT 
`PRODUCENT`, 
`KOD_PRODUKTU`, 
`TYP_PRODUKTU`, 
`CENA_SPRZEDAZ`, 
`NAZWA`, 
`OPIS` 
FROM 
`Oleje` 
WHERE `KOD_PRODUKTU` IN ('". implode("','", $request->Items->Oleje_Rekomendowane) . "')";

$sql_oleje;
$result = mysqli_query($db, $sql_oleje);


$wynik = array();

$i = 0;

$oil_json = array();

while($row = mysqli_fetch_assoc($result))
{
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


//OLEJE Z POLECANEJ SZLACHETNOŚCI
$sql_oleje_szlach = "SELECT 
`PRODUCENT`, 
`KOD_PRODUKTU`, 
`TYP_PRODUKTU`, 
`CENA_SPRZEDAZ`, 
`NAZWA`, 
`OPIS`,
`KLASA` 
FROM 
`Oleje` 
WHERE `KOD_SZLACHETNOSCI`='". $request->Items->Olej_polecana_szlach[0] . "'";

//echo $sql_oleje_szlach;

$result = mysqli_query($db, $sql_oleje_szlach);

$i_eko = 0;
$i_prem = 0;
$i_mid = 0;
$i_sport = 0;


$eko_oil_json = array();
$mid_oil_json = array();
$prem_oil_json = array();
$sport_oil_json = array();

while($row = mysqli_fetch_assoc($result))
{
	if($row['KLASA'] == "EKONOMICZNA")
	{
		$eko_oil_json[$i_eko] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_eko += 1;
	}
	else if($row['KLASA'] == "DOBRA")
	{
		$mid_oil_json[$i_mid] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_mid += 1;
	}
	else if($row['KLASA'] == "PREMIUM")
	{
		$prem_oil_json[$i_prem] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_prem += 1;
	}
	else if($row['KLASA'] == "SPORT")
	{
		$sport_oil_json[$i_sport] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_sport += 1;
	}
}


//POZOSTAŁE OLEJE ZE SZLACHENTOŚCI

$eko_sql_oleje_rest = "SELECT 
`PRODUCENT`, 
`KOD_PRODUKTU`, 
`TYP_PRODUKTU`, 
`CENA_SPRZEDAZ`, 
`NAZWA`, 
`OPIS`,
`KLASA` 
FROM 
`Oleje` 
WHERE `KOD_SZLACHETNOSCI` IN ('". implode("','", $request->Items->Oleje_zgodne_szlach) . "')";
//echo $eko_sql_oleje_rest;

$result = mysqli_query($db, $eko_sql_oleje_rest);

while($row = mysqli_fetch_assoc($result))
{
	if($row['KLASA'] == "EKONOMICZNA")
	{
		$eko_oil_json[$i_eko] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_eko += 1;
	}
	else if($row['KLASA'] == "DOBRA")
	{
		$mid_oil_json[$i_mid] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_mid += 1;
	}
	else if($row['KLASA'] == "PREMIUM")
	{
		$prem_oil_json[$i_prem] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_prem += 1;
	}
	else if($row['KLASA'] == "SPORT")
	{
		$sport_oil_json[$i_sport] = array(
			"Producent"=> (string) $row['PRODUCENT'], 
			"ID" => (string)$row['KOD_PRODUKTU'],
			"TypProduktu" => (string)$row['TYP_PRODUKTU'], 
			"Ilosc" => 1,
			"CenaBrutto" => (float) $row['CENA_SPRZEDAZ'],
			"Nazwa" => (string) $row['NAZWA'],
			"Opis" => (string) $row['OPIS']
		) ;
		$i_sport += 1;
	}
}


$wynik = array(
	"Filtry_oleju" => array(),
	"Filtry_paliwa" => array(),
	"Filtry_powietrza" => array(),
	"Filtry_kabiny" => array(),
	"Oleje_polecane" => $oil_json ,
	"Oleje_eko" =>$eko_oil_json ,
	"Oleje_mid" => $mid_oil_json,
	"Oleje_prem" => $prem_oil_json,
	"Oleje_sport" => $sport_oil_json
);
echo json_encode( $wynik);
?>
			