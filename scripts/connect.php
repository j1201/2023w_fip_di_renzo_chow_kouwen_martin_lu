<?php

    // Set up connection creds

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $user = "root";
    $pass = "root"; // For MAMP
    $url = "localhost"; // check on your hosting for live server
    // Change the database name for each site 
    $db = "db_winTheGame";

    // Connect to db
    $link = mysqli_connect($url, $user, $pass, $db, "8888"); //Mac

    // Check our connection
    if(!$link) {
        error_log("Connection error: " . mysqli_connect_error());
    }


?>