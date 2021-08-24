//let FormName = document.querySelector('Name');
//let FormEmail = document.querySelector('Email');
//let FormMessage = document.querySelector('Message');

function sendEmail(){

    Email.send({
        //Host : "smtp.gmail.com",
        //Username : "djwatelse",
        //Password : "Monday5678",
        SecureToken: 'e8603e92-b0d1-494c-bc9d-676d4088abbb',
        To : 'djwatelse@gmail.com',
        Name: 'Name',
        From : "Email",
        Body : "Message"
    }).then(
      message => alert("Your Message Has Been Sent Someone Will get back to ASAP"))
    );
    
} 

/*e8603e92-b0d1-494c-bc9d-676d4088abbb*/