

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

  console.log('Form submission started');
  
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const college = document.getElementById('college').value;
  const course = document.getElementById('course').value;

  console.log('Form data:', { name, mobile, email, otp, college, course });

  db.collection('registrations').add({
    name: name,
    mobile: mobile,
    email: email,
    otp: otp,
    college: college,
    course: course
  })
  .then(() => {
    console.log('Data saved successfully');
    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
    alert('Error in registration. Please try again.');
  });
}
