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
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
} 

/*e8603e92-b0d1-494c-bc9d-676d4088abbb*/