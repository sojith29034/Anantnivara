// Number Copy
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}


// Contact Form
const form = document.querySelector("form");

const fullName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail(){
    const subject = `Message from ${fullName.value}`;
    const body = `${message.value} <br><br> Regards, <br> ${fullName.value} <br> Phone: ${phone.value} <br> E-mail: ${email.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sunny.anantnivararealty@gmail.com",
        Password : "3D8377CAF9250EF68134D6979D2DE2634817", // This should not be exposed in client-side code
        To : 'sunny.anantnivararealty@gmail.com',
        From : 'sunny.anantnivararealty@gmail.com',
        Subject : subject,
        Body : body
    }).then(
      response => {
        if(response == "OK"){
            Swal.fire({
                title: "Success!",
                text: "E-mail has been sent successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Erroe!",
                text: "Failed to send the email.",
                icon: "error"
            });
        }
      }
    ).catch(error => {
        Swal.fire({
            title: "Errorrrr!",
            text: "Failed to send the email.",
            icon: "error"
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (fullName.value && phone.value && email.value && message.value) {
        sendEmail();
    } else {
        Swal.fire({
            title: "Warning!",
            text: "Please fill out all fields before submitting.",
            icon: "warning"
        });
    }
});
