function validateForm() {
    var email = document.getElementById("l1").value;
    var password = document.getElementById("p1").value;
    var mailformat = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    var pval = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=]).{8,}$/;
    if (!(mailformat.test(email))) {
        alert("Please enter a valid email addrress");
    }
    else {

        if (pval.test(password)) {
            alert("Login successfull \n click to continue");
            open("Catalog.html")
        }
        else {
            alert("enter valid password\nPassword must contain atleast one uppercase,digit,special charcter and must be minimum of 8 characters");
        }
    }

}
function myFunction() {
    var x = document.getElementById("p1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}