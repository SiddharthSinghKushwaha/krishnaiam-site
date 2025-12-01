import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logoutUser() {
    return signOut(auth);
}

export function checkAuth(redirectIfNotLoggedIn = false) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is logged in:", user.email);
            // If on login page and logged in, redirect to dashboard
            if (window.location.pathname.includes('login.html')) {
                window.location.href = 'dashboard.html';
            }
        } else {
            console.log("User is logged out");
            if (redirectIfNotLoggedIn) {
                window.location.href = 'login.html';
            }
        }
    });
}
