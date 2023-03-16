<?php

    //Get all of something
    function getAll() {
        include("connect.php");
        $queryAll = "SELECT *  
                    FROM tbl_petition";
        $runAll = mysqli_query($link, $queryAll);
        if($runAll){
            return $runAll;
        }else{
            $error = "From getAll()";
            return $error;
        }
        mysqli_close($link);
    }


?>