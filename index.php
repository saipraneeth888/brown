<?php
# This function reads your DATABASE_URL configuration automatically set by Heroku
# the return value is a string that will work with pg_connect
$response=file_get_contents("index.html");
echo $response;
?>