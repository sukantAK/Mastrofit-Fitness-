class MembershipFormValidator {
    validateForm() {
        let name = (<HTMLInputElement>document.forms["membershipForm"]["name"]).value;
        let age = (<HTMLInputElement>document.forms["membershipForm"]["age"]).value;
        let gender = (<HTMLSelectElement>document.forms["membershipForm"]["gender"]).value;
        let email = (<HTMLInputElement>document.forms["membershipForm"]["email"]).value;
        let phone = (<HTMLInputElement>document.forms["membershipForm"]["phone"]).value;
        let address = (<HTMLInputElement>document.forms["membershipForm"]["address"]).value;

        if (name === "" || age === "" || gender === "" || email === "" || phone === "" || address === "") {
            alert("All fields must be filled out");
            return false;
        }

        if (isNaN(parseInt(age)) || parseInt(age) <= 0) {
            alert("Age must be a valid positive number");
            return false;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }

        alert("Form Submitted Successfully");
        return true;
    }
}
let membershipFormValidator = new MembershipFormValidator();
