// Copy Phone Number
function copyPhone() {
    var range = document.createRange();
    range.selectNode(document.querySelector(".--phone"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
}
// Copy E-mail
function copyMail() {
    var range = document.createRange();
    range.selectNode(document.querySelector(".--mail"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
}

// Alertify Message Position Check
function checkWidth() {
    if (document.body.clientWidth <= 640) {
        alertify.set('notifier','position', 'bottom-center');
    } else if (document.body.clientWidth >= 640) {
        alertify.set('notifier','position', 'bottom-right');
    }
}

// check form validation

var modal = document.querySelector('.modal');

// Setting up variables and expressions

// input fields
var nameInput = document.querySelector('#input-name');
var email = document.querySelector('#input-email');
var phone = document.querySelector('#input-phone');
var message = document.querySelector('#input-message');

// invalid elements
var invalidName = document.querySelector('.contact-form__invalid--name')
var invalidEmail = document.querySelector('.contact-form__invalid--email')
var invalidPhone = document.querySelector('.contact-form__invalid--phone')
var invalidMessage = document.querySelector('.contact-form__invalid--message')

// patterns
var phoneExpression = /[0-9]{8,8}$/;
var emailExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var stringExpression = /[a-zA-Z]/;


function checkValidation() {

    //checks
    var check1 = false;
    var check2 = false;
    var check3 = false;
    var check4 = false;

    // Validation

    // name validation
    if (nameInput.value === '') {
        invalidName.style.display = 'block';
        invalidName.innerHTML = 'Dette feltet kan ikke være tomt!';
        check1 = false;
    } else if (!stringExpression.test(nameInput.value)) {
        invalidName.style.display = 'block';
        invalidName.innerHTML = 'Ugyldig tegn brukt! (A-Å, a-å)';
        check1 = false;
    } else {
        invalidName.style.display = 'none';
        check1 = true;
        console.log('name ok!');
    }

    // email validation
    if (email.value === '') {
        invalidEmail.style.display = 'block';
        invalidEmail.innerHTML = 'Dette feltet kan ikke være tomt!';
        check2 = false;
    } else if (!emailExpression.test(email.value)) {
        invalidEmail.style.display = 'block';
        invalidEmail.innerHTML = 'E-post er ugyldig! (example@mail.com)';
        check2 = false;
    } else {
        invalidEmail.style.display = 'none';
        check2 = true;
        console.log('email ok!');
    }

    // phone validation
    if (phone.value === '') {
        invalidPhone.style.display = 'block';
        invalidPhone.innerHTML = 'Dette feltet kan ikke være tomt!';
        check3 = false;
    } else if (!phoneExpression.test(phone.value)) {
        invalidPhone.style.display = 'block';
        invalidPhone.innerHTML = 'Mobilnummer er ugyldig! (00000000)';
        check3 = false;
    } else {
        invalidPhone.style.display = 'none';
        check3 = true;
        console.log('phone ok!');
    }

    // message validation
    if (message.value === '') {
        invalidMessage.style.display = 'block';
        invalidMessage.innerHTML = 'Dette feltet kan ikke være tomt!';
        check4 = false;
    } else {
        invalidMessage.style.display = 'none';
        check4 = true;
        console.log('message ok!')
    }

    // make sure modal has display of 'none'
    modal.style.display = 'none';

    // add content to modal to ask the user to send message if information is correct
    // make modal visible

    if (check1 && check2 && check3 && check4) {
        submitForm();
        successMessage();
        //writeModal();
        if (modal.style.display === 'none' || modal.style.display === '') {
            modal.style.display = 'block';
        }
    }

}

function submitForm() {
    var contactForm = document.querySelector('contact-form');
    contactForm.submit();
}

function writeModal() {
   
    // add up and write inputs to modal

    modal.innerHTML = '<button class="modal__exit" onclick="closeModal()">&#215;</button><div class="modal__container"><div class="modal__container__header">Nesten der! Sjekk at informasjonen stemmer og trykk på send.</div><div class="modal__container__title">Navn:</div><div class="modal__container__input" name="name">' + nameInput.value + '</div><div class="modal__container__title">E-post:</div><div class="modal__container__input" name="email">' + email.value + '</div><div class="modal__container__title">Mobilnummer:</div><div class="modal__container__input" name="phone">' + phone.value + '</div><div class="modal__container__title">Melding:</div><div class="modal__container__input" name="message">' + message.value + '</div><button type="submit" method="POST" action="mail.php" class="modal__container__button" onclick="successMessage()">Send</button></div>'
}

function successMessage() {
    modal.innerHTML = '<button class="modal__exit" onclick="closeModal()">&#215;</button><div class="modal__container"><div class="modal__container__header">Takk for din melding ' + nameInput.value + '.<br><br>Vi vil ta kontakt så snart som mulig!</div><button class="modal__container__button" onclick="closeModal()">Lukk.</button></div>'
}

// Close modal function

function closeModal() {
    var modal = document.querySelector('.modal');

    modal.style.display = 'none';
}