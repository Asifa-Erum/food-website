import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBshzDze2WtKOlYVMkHjWGwr0rACn6Yhvg",
  authDomain: "signup-2k25.firebaseapp.com",
  projectId: "signup-2k25",
  storageBucket: "signup-2k25.firebasestorage.app",
  messagingSenderId: "54840336971",
  appId: "1:54840336971:web:64369a8ed741c7be68e3ce",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          title: "Success!",
          text: "User added and message saved 🎉",
          icon: "success",
          confirmButtonText: "OK",
        });
        
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
        
      });
  });
});
