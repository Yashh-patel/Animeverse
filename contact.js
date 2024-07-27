var sub = document.querySelector("#btn-1");
sub.addEventListener("click", function () {
    var form = document.getElementById("myForm");
    if (form.checkValidity()) {
        alert("We will send you a message soon");
    } else {
        alert("Please fill out all required fields correctly.");
    }
});