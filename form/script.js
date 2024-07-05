function sendOtp() {
        const email = document.getElementById('email').value;

        if (email) {
            fetch('https://example.com/api/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('OTP has been sent to your email.');
                } else {
                    alert('Failed to send OTP. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        } else {
            alert('Please enter a valid email address.');
        }
    }

    function calculatePrice() {
        const college = document.getElementById('college').value;
        const course = document.getElementById('course').value;
        let price = 0;

        switch (college) {
            case 'LND':
                price += 1000;
                break;
            case 'MS':
                price += 400;
                break;
            case 'SNS':
                price += 1500;
                break;
        }

        switch (course) {
            case 'UG':
                price += 200;
                break;
            case 'PG':
                price += 300;
                break;
        }

        document.getElementById('priceButton').innerText = 'Price: INR ' + price;
    }


    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyXsD-cXaA9uWqGxo-HlLFeppbfZFaKlc",
  authDomain: "login-fca74.firebaseapp.com",
  projectId: "login-fca74",
  storageBucket: "login-fca74.appspot.com",
  messagingSenderId: "25232731555",
  appId: "1:25232731555:web:6db9952517c7627569be16",
  measurementId: "G-Y8N2SY72DE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    const college = document.getElementById('college').value;
    const course = document.getElementById('course').value;

    // Save form data to Firestore
    db.collection('registrations').add({
        name: name,
        mobile: mobile,
        email: email,
        otp: otp,
        college: college,
        course: course
    })
    .then(() => {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    })
    .catch((error) => {
        console.error('Error writing document: ', error);
        alert('Error in registration. Please try again.');
    });
}
