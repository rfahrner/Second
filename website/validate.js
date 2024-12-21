let form = document.getElementById('userForm')

function emailVerify(event) {
    let one = document.verifyEmail.value
    let two = document.email.value
    if (one == two) {return true}
        else
            return console.log("Emails entered do not match")
            event.preventDefault();

}
form.addEventListener("submit",emailVerify)