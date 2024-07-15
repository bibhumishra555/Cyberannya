// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

export { db };
