import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6mBiEZneMuAjO5gA1IKAmt0WBn7nZr-U",
  authDomain: "fashionproject-1837.firebaseapp.com",
  projectId: "fashionproject-1837",
  storageBucket: "fashionproject-1837.appspot.com",
  messagingSenderId: "504455958369",
  appId: "1:504455958369:web:86352d0e4b14d825d23f20",
  measurementId: "G-H3WY7ZGP0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Login function
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
    } catch (error) {
        console.error('Error logging in:', error);
        alert('Failed to login');
    }
});

// Register function
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registered successfully!');
    } catch (error) {
        console.error('Error registering:', error);
        alert('Failed to register');
    }
});

// Password reset function
document.getElementById('resetPasswordForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset email sent!');
    } catch (error) {
        console.error('Error resetting password:', error);
        alert('Failed to send reset email');
    }
});

// Upload file function
export async function uploadFile(file) {
    const storageRef = ref(storage, 'some-child/' + file.name);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log('File available at', downloadURL);
}

// Handle file upload
window.handleUpload = async function () {
    const file = document.getElementById('fileInput').files[0];
    if (file) {
        await uploadFile(file);
    } else {
        console.error('No file selected');
    }
};
