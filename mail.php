<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $errorEmpty = false;
    $errorName = false;
    $errorPhone = false;
    $errorEmail = false;

    $nameCheck = ereg('/[a-zA-Z]/', $name);
    $phoneCheck = ereg('/[0-9]{8,8}/', $phone);

    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "<span class='contact-form__error'>Fyll inn alle feltene!</span>";
        $errorEmpty = true;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<span class='contact-form__error'>Fyll inn en gyldig e-post!</span>";
    } elseif (!$nameCheck) {
        echo "<span class='contact-form__error'>Ugyldig tegn brukt i navn feltet!</span>";
    } elseif (!$phoneCheck) {
        echo "<span class='contact-form__error'>Ugyldig mobilnummer oppgitt!</span>";
    }
} else {
    echo "Feil oppstått! Vennligst prøv igjen. "
}


    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $receiver = "rubenhansen94@gmail.com";
    $headers = "From: " . $email;
    $content = $name . " har sendt deg en mail.\nMobilnummer: " . $phone . "\n\n" . $message;

    mail($receiver, $name, $content, $headers);
?>

<script>
    $("#input-name, #input-email, #input-phone, #input-message").removeClass("input-error");

    var errorEmpty = "<?php echo $errorEmpty; ?>"
    var errorName = "<?php echo $errorName; ?>"
    var errorEmail = "<?php echo $errorEmail; ?>"
    var errorPhone = "<?php echo $errorPhone; ?>"

    if (errorEmpty == true) {
        $("#input-name, #input-email, #input-phone, #input-message").addClass("input-error");
    }
    if (errorName == true) {
        $("#input-name").addClass("input-error");
    }
    if (errorEmail == true) {
        $("#input-email").addClass("input-error");
    }
    if (errorPhone == true) {
        $("#input-phone").addClass("input-error");
    }
    if (errorEmpty == false && errorName == false && errorEmail == false && errorPhone == false) {
        $("#input-name, #input-email, #input-phone, #input-message").val("");
    }
</script>