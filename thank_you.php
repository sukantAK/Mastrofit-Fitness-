<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h2>Thank you for contacting us!</h2>
    <p>We have received your message.</p>
    <h3>Contact Details:</h3>
    <ul>
      <li><strong>Name:</strong> <?php echo $_POST['name']; ?></li>
      <li><strong>Email:</strong> <?php echo $_POST['email']; ?></li>
      <li><strong>Message:</strong> <?php echo $_POST['message']; ?></li>
    </ul>
    <a href="contact.html" class="btn btn-primary">Back to Contact Page</a>
  </div>
</body>
</html>
