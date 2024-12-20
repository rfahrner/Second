function emailVerify() {
    let one = document.getElementById('verifyEmail')
    let two = document.getElementById('email')
    if (one == two) {return true}
        else
            return alert("Emails do not match")
}