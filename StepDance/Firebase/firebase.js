import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCfUYVGnu04RqChmLcvujV11k_HgGiQp1E",
    authDomain: "stepdance-336e7.firebaseapp.com",
    projectId: "stepdance-336e7",
    storageBucket: "stepdance-336e7.appspot.com",
    messagingSenderId: "1009075647600",
    appId: "1:1009075647600:web:d1b7307484afa69d6cb0b5",
    measurementId: "G-QVED1XDBK5"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };