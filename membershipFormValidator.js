var MembershipFormValidator = /** @class */ (function () {
    function MembershipFormValidator() {
    }
    MembershipFormValidator.prototype.validateForm = function () {
        var name = document.forms["membershipForm"]["name"].value;
        var age = document.forms["membershipForm"]["age"].value;
        var gender = document.forms["membershipForm"]["gender"].value;
        var email = document.forms["membershipForm"]["email"].value;
        var phone = document.forms["membershipForm"]["phone"].value;
        var address = document.forms["membershipForm"]["address"].value;
        if (name === "" || age === "" || gender === "" || email === "" || phone === "" || address === "") {
            alert("All fields must be filled out");
            return false;
        }
        if (isNaN(parseInt(age)) || parseInt(age) <= 0) {
            alert("Age must be a valid positive number");
            return false;
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
        // Additional validation for phone number, if needed
        alert("Form Submitted Successfully");
        return true;
    };
    return MembershipFormValidator;
}());
// Usage
var membershipFormValidator = new MembershipFormValidator();
