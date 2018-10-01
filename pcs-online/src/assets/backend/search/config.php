<?php
   define('DB_SERVER', '127.0.0.1');
   define('DB_USERNAME', 'likeulikeshop');
   define('DB_PASSWORD', 'Lajkjulajk123!@#');
   define('DB_DATABASE', 'likeulike_1');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
   mysqli_query($db, "SET CHARSET utf8"); 
mysqli_query($db, "SET NAMES `utf8` COLLATE `utf8_polish_ci`");
?>