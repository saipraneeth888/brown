<?php

$dir = 'img/Backgrounds';
$files1 = scandir($dir);

$count = sizeof($files1);
for ($i=2; $i<$count; $i++)
  {
  //echo "Here: " . $files1[$i] . "\n";
  echo "<li><a href id='" . $files1[$i] . "' data-rel='dialog'>
	<img src='img/Backgrounds/" . $files1[$i] . "' class='ui-li-thumb'>
	Background " . $i . "</a></li> \n\n";
  }


?>
