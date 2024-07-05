
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCUvfhKyttDlt0429-eNktvlyi2tevBG8g",
    authDomain: "cyberannya.firebaseapp.com",
    projectId: "cyberannya",
    storageBucket: "cyberannya.appspot.com",
    messagingSenderId: "635998414209",
    appId: "1:635998414209:web:e54fa0b6a4ee9e105ef480",
    measurementId: "G-983YQVSW4W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
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
