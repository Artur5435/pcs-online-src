<?php 

include("config.php");


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$login = mysqli_real_escape_string($db,$request->Client->Data);
$products = $request->Products->Cart;

$productsID = "";
$productsTyp = "";
$productsCeny = "";
$productsIlosc = "";

$all = 0;

for($i = 0; $i < count($products); $i += 1)
{
    $productsID .= mysqli_real_escape_string($db,$products[$i]->ID) . "#";
    $productsTyp .=  mysqli_real_escape_string($db,$products[$i]->Typ) . "#";
    $productsCeny .=  mysqli_real_escape_string($db,$products[$i]->CenaBrutto) . "#";
    $productsIlosc .=  mysqli_real_escape_string($db,$products[$i]->Ilosc) . "#";
    $all += $products[$i]->CenaBrutto * $products[$i]->Ilosc;
}

$dane = $request->Data;
$dane_txt .= mysqli_real_escape_string($db,$dane->Login) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->FirstName) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->LastName) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->NIP) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->PostalCode) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->City) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->Street) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->HouseNum) . "  ";
$dane_txt .= mysqli_real_escape_string($db,$dane->AppartmentNum);

$sendType = $request->SendType;


$sendType_txt = mysqli_real_escape_string($db,$sendType->Opis) . "  " 
. mysqli_real_escape_string($db,$sendType->Cena);


$sql = "INSERT INTO `Orders`
(`LOGIN`,
 `BRUTTO`, 
 `ID_PRODUCTS`, 
 `PRICE_PRODUCTS`, 
 `VAT`, 
 `NETTO`, 
 `QUANTITY_PRODUCTS`, 
 `STATUS`,
 `DANE`,
 `PRZESYLKA`) 
VALUES 
('".$login ."',
'".$all *100 ."' ,
'".$productsID ."',
'".$productsCeny ."',
'". round($all - ($all/1.23),2,PHP_ROUND_HALF_UP) *100 . "'
,'". round($all/1.23,2,PHP_ROUND_HALF_UP)*100 . "',
'".$productsIlosc ."',
'złożone',
'" . $dane_txt . "',
'" . $sendType_txt . "');";
//echo $sql;
$result = mysqli_query($db, $sql);


echo json_encode(array($login , "", ""));


//UPDATE Oleje
//SET CENA_HURT = replace(CENA_HURT," z?", "")


?>

