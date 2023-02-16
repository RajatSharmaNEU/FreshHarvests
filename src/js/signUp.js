// Import our custom CSS
import '../scss/styles.scss';

import * as bootstrap from 'bootstrap';

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const signUpForm  = document.getElementById('signup-form');

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper);

    setTimeout( wrapper.remove, 2000);
}

document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
    event.preventDefault();
    if(signUpForm.checkValidity()) {
        alert('Thank you, you sign up request has been raised!', 'success');
    }
})
