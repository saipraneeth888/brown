<?php
    ini_set('error_log', '');
    ini_set('display_errors', 'Off');
    
    $dir = 'img/Backgrounds';
    $files1 = scandir($dir);
    
    $count = sizeof($files1);
    assertTrue($count == 0);

    for ($i=2; $i<$count; $i++)
    {
        echo "<li><a href class='background' value='" . $files1[$i] . "' data-rel='dialog'><img src='img/Backgrounds/" . $files1[$i] . "' class='ui-li-thumb'>Background " . $i . "</a></li> \n\n";
    }
 	
 	function assertTrue($condition)
{
    if (!$condition) {
        throw new Exception('Assertion failed.');
    }
}   
    ?>