import '../css/index.css';

export let error = document.querySelector("#error")

export let name = document.getElementById("name")

export let email = document.getElementById("email")

export let message = document.getElementById("message")

export const submit = document.querySelector(".submit");

const spinner = document.getElementById('spinner');

document.body.addEventListener('click',()=> {
    if(error.innerText === "Great Success!!!") {
        error.innerText = ""
        error.style.backgroundColor="var(--black)"
    }
})

function sanitize(element) {
    let unsanitizedHTML = element.innerHTML
    let tempElement = document.createElement('div');
    tempElement.innerText = unsanitizedHTML;
    element.innerHTML = tempElement.innerHTML;
    return element
}

export function sendMail(event) {
    submit.setAttribute('disabled','true')
    event.preventDefault();
    let tempParams = {
        from_name: sanitize(name).value,
        from_email: sanitize(email).value,
        message: sanitize(message).value
    }

    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then(()=>{
                try {
                    spinner.classList.remove('hide');
                    name.value='';
                    email.value='';
                    message.value='';
                    console.log("message was sent");
                    setTimeout(()=> {
                        spinner.classList.add('hide');
                        submit.removeAttribute('disabled')
                        error.innerText = "Great Success!!!"
                        error.style.backgroundColor = "green"
                    },5*1000)
                }
                catch (e) {
                    error.innerText = "Your message wasn`t sent because of error"
                    error.style.backgroundColor = "red"
                    console.log("Error :",error.textContent)
                }
            },
        )
}

//////////////////

let form = document.querySelector(".contact-form")
name.addEventListener('input',function(event) {
    if(name.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

email.addEventListener('input',function(event) {
    if(email.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

message.addEventListener('input',function(event) {
    if(message.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

form.addEventListener('submit', function(event) {
    if(!name.validity.valid || !email.validity.valid || !message.validity.valid) {
        showError();
        event.preventDefault();
    }
    else {
        sendMail(event)
    }
})

function showError() {
    if(name.validity.valueMissing) {
        error.textContent = "Enter your name, please";
    }
    else if(name.validity.tooShort) {
        error.textContent = "Your name is too short";
    }
    else if(email.validity.valueMissing) {
        error.textContent = "Enter your Email, please";
    }
    else if(email.validity.typeMismatch) {
        error.textContent = "Enter correct Email, please";
    }
    else if(email.validity.tooShort) {
        error.textContent = "Your Email is too short";
    }
    else if(message.validity.valueMissing) {
        error.textContent = "Enter your message, please";
    }
    else if(message.validity.tooShort) {
        error.textContent = "Your message is too short";
    }
    error.style.backgroundColor="var(--red)"
}


(function() {
    let init = process.env.INIT;
    emailjs.init(init);
})();