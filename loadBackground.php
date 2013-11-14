<?php
    
    $dir = 'img/Backgrounds';
    $files1 = scandir($dir);
    
    $count = sizeof($files1);
    //echo "<script> alert('HELLO!');</script>";
    echo "<script>function changeBackground(img) {alert('You Picked ' + img);}</script>\n\n";
    
    for ($i=2; $i<$count; $i++)
    {
        //echo "Here: " . $files1[$i] . "\n";
        /*echo "<script>$('#" . $files1[$i] . "').click(function () {
         alert('Its Working!');});</script> \n";
         /*echo "<script>$('#" . $files1[$i] . "').click(function () {
         mainImage2.src = '" . $files1[$i] . "';
         layer.get('#mainImageId')[0].setImage(mainImage2);
         layer.draw()});</script> \n";*/
        echo "<li><a href id='" . $files1[$i] . "' onclick='changeBackground(\"" . $files1[$i] . "\")' data-rel='dialog'><img src='img/Backgrounds/" . $files1[$i] . "' class='ui-li-thumb'>Background " . $i . "</a></li> \n\n";
    }
    
    ?>
