$(document).ready(function() {
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    $.ajax({
      type: 'POST',
      url: 'submit_form.php',
      data: {name: name, email: email, message: message},
      success: function(response) {
        $('#contactForm')[0].reset();
        $('#successMessage').html('Your message has been sent. We will get back to you soon.');
      },
      error: function(xhr, status, error) {
        console.error(xhr.responseText);
        $('#successMessage').html('An error occurred. Please try again later.');
      }
    });
  });
});
