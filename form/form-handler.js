import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Handle form submission
const form = document.getElementById('registrationForm');
form.addEventListener('submit', async (e) => {
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

    try {
        await addDoc(collection(db, "users"), {
            name: name,
            mobile: mobile,
            email: email,
            college: college,
            course: course,
            timestamp: new Date().toISOString()
        });
        alert('Registration successfull for Cyberanya 3.O');
        form.reset();
    } catch (error) {
        alert('Error in Registration: ' + error);
    }
});
