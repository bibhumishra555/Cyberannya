import { database } from './firebase-config.js';
import { ref, set } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

// Handle form submission
const form = document.getElementById('registrationForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;
    const course = document.getElementById('course').value;
    const captcha = document.getElementById('captcha').value;

    if (captcha !== '42') {
        alert('Invalid CAPTCHA');
        return;
    }

    const newUserRef = ref(database, 'users/' + Date.now());
    set(newUserRef, {
        name: name,
        mobile: mobile,
        email: email,
        college: college,
        course: course
    }).then(() => {
        alert('Data submitted successfully');
        form.reset();
    }).catch((error) => {
        alert('Error submitting data: ' + error);
    });
});
