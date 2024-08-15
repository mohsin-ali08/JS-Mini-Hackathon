// import { auth,
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,} from "../../utils/firebase.js";


//     onAuthStateChanged(auth, (user) => {
//         if (user) {
         
//           const uid = user.uid;
//           console.log("user", user);
//           // ...
//         } else {
//           console.log("user not exist" );
//           // User is signed out
//           // ...
//         }
//       });

//       //   signUp form 

// let signUp = ()=>{
//     // let firstName = document.getElementById("firstName").value;
//     // let lastName = document.getElementById("lastName").value;
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     // let rePassword = document.getElementById("re-password");
    
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((res) => {
//         // Signed up 
//         console.log("user",res.user);
//         // ...
//     })
//     .catch((error) => {
//         console.log("error", error);
//         // ..
//     });
// };
// let btn=document.getElementById("signUp-btn");
// btn.addEventListener("click", signUp)

// // sign in 

// let signIn = ()=>{
//     let email = document.getElementById("log-in-email");
//     let password = document.getElementById("log-in-password");
   
    
//     signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((res) => {
//         // Signed up 
//         console.log("user",res.user);
//         // ...
//     })
//     .catch((error) => {
//         console.log("error", error);
//         // ..
//     });

// };
// let login=document.getElementById("login-btn");
// login.addEventListener("click", signIn)


// // show my signup form
// function showSignUp() {
//     window.location.href = '../signUp/signUp.html';
// }

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('button[onclick="showSignUp()"]').onclick = showSignUp;
// });





// Get the modal
let modal = document.getElementById("loginModal");

// Get the button that opens the modal
let btn = document.getElementById("login");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the sign-in and sign-up form elements
let signInForm = document.getElementById("signInForm");
let signUpForm = document.getElementById("signUpForm");

// Get the buttons for switching forms
let showSignUpBtn = document.getElementById("showSignUpForm");
let showSignInBtn = document.getElementById("showSignInForm");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Show sign-up form and hide sign-in form
showSignUpBtn.onclick = function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
}

// Show sign-in form and hide sign-up form
showSignInBtn.onclick = function() {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
}

// Handle sign-in form submission (for demonstration purposes)
signInForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert("LogIn Successful!");
    modal.style.display = "none"; // Close the modal
}

// Handle sign-up form submission (for demonstration purposes)
signUpForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert("SignUp Successful!");
    signUpForm.style.display = "none"; // Hide sign-up form
    signInForm.style.display = "block"; // Show sign-in form
}


