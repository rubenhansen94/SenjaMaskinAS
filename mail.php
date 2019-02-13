<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $receiver = "rubenhansen94@gmail.com";
    $headers = "From: " . $email;
    $content = $name . " har sendt deg en mail.\nMobilnummer: " . $phone . "\n\n" . $message;

    mail($receiver, $name, $content, $headers);
?>