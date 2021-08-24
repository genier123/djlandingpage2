//let FormName = document.querySelector('Name');
//let FormEmail = document.querySelector('Email');
//let FormMessage = document.querySelector('Message');

function sendEmail(){

        Email.send({
            SecureToken : "47b1a2ef-1808-4569-bd17-944a4559a55a",
            To : 'djwatelse@gmail.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
        
    }

//47b1a2ef-1808-4569-bd17-944a4559a55a