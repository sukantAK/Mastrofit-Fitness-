<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    header("Location: thank_you.php?name=" . urlencode($name));
    exit();
} else {
    echo "Error: Method not allowed";
}
?>
