<?php
$_POST = json_decode(file_get_contents("php://input"), true); // use with json
echo var_dump($_POST);