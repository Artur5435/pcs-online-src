
<?php
include('config.php');
$marka = mysqli_real_escape_string($db, $_POST['Marka']);
$model = mysqli_real_escape_string($db, $_POST['Model']);
$silnik = mysqli_real_escape_string($db, $_POST['Silnik']);
$silnik_E = explode('#', $silnik); 
$sql_Auto = "SELECT * FROM `Samochody` WHERE `MARKA`='" . $marka . "' AND `MODEL`='". $model ."' AND `SILNIK`='" . $silnik_E[0] . "' AND `MOCKM`='". $silnik_E[1] ."'";
$samochody = mysqli_query($db, $sql_Auto);

if(mysqli_num_rows($samochody) == 1)
{
    echo "<table>";
    $row = mysqli_fetch_array($samochody, MYSQLI_ASSOC);
    $kodyFajne = explode('#', $row['KOD ZGODNY FILTR']);
    $i = 1;
    while($i < count($kodyFajne) -1)
    {
        $sql_Filtry = "SELECT * FROM `Filtry` WHERE `KOD PRODUKTU`='#". $kodyFajne[$i] . "'";
     
        $produkty = mysqli_query($db, $sql_Filtry);
        $row_produkty = mysqli_fetch_array($produkty, MYSQLI_ASSOC);
        echo "<tr><td> " . $row_produkty['LINIA'] . "</td><td style='width: 500px;'> " . $row_produkty['OPIS'] . "</td></tr>";
        $i += 1;
    }
    echo "</table>";
}

?>

