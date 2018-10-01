<?php 


    include('config.php');
    $marka = mysqli_real_escape_string($db, $_POST['Marka']);
	$sql = "SELECT DISTINCT `MARKA` FROM `Samochody` ORDER BY `MARKA`";
	$result = mysqli_query($db, $sql);
	
	$marki = array();

	$i = 0;

	while($row = mysqli_fetch_assoc($result))
	{
		$marki[$i] = $row['MARKA'];
		$i += 1;
	}

	echo json_encode(array("Marki" => $marki ));
?>