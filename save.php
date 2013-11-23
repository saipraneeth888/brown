<?php
    define('UPLOAD_DIR', 'img/users');
 //   print_r($_POST);
    $img = $_POST['imgBase64'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $uniqueID = uniqid();
    $file = UPLOAD_DIR . $uniqueID . '.png';
    $success = file_put_contents($file, $data);
    print $success ? $file : 'Unable to save the file.';
    return $uniqueID;
?>

