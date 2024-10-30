function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.sendMail("service_xjj9p4s","template_f3kjqor",parms).then(alert("Email sent!"))
}