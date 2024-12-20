function emailVerify() {
    var one = document.getElementById('verifyEmail')
    var two = document.getElementById('email')
    if (one == two) {return true}
        else
            return alert("Emails do not match")
}