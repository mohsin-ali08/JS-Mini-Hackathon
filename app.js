import { auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,} from "../../utils/firebase.js";




    // auth state change jab user login howa
    //  hoga to user dikhaiga warna user not exist dikhaiga 
    onAuthStateChanged(auth,(user) => {
        if (user) {
            // User is signed in

            console.log(user);
            login.style.display = "none";  // Hide login button
            logoutBtn.style.display = "block"; // Show logout button
        } else {
            console.log("user not exist" );
            // User is signed out
            login.style.display = "block";  // Show login button
            logoutBtn.style.display = "none";  // Hide logout button
            // location.replace("./index.html");
        }
    });
    




      //   signUp form 
// const signUPForm = document.getElementById("sign-up-form");

// const creatUserinDataBase = async (newUid, name, email, password) => {
//     try {
//         const userDoc = await setDoc(doc(db, "siteUsers", newUid), {
//             name: name,
//             email: email,
//             password: password,
//         });

//         console.log(userDoc);
//         console.log(`New User in DataBase with uid : ${newUid}`);

//     } catch (error) {
//         console.log(error);
//     }

// }

// signUPForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     console.log(e);

//     const userName = e.srcElement[0].value;
//     const userEmail = e.srcElement[1].value;
//     const userPassword = e.srcElement[2].value;

//     const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword)
//     try {
//         loader("Registered Successfully");
//         const user = userCredential.user;
//         creatUserinDataBase(user.uid, userName, userEmail, userPassword);
//         console.log(user);
//     } catch (error) {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//     } finally {
//         const loader = document.getElementById("loader");
//         loader.style.display = "none";
//     }
// })






// let signUp = ()=>{
//     // let firstName = document.getElementById("firstName").value;
//     // let lastName = document.getElementById("lastName").value;
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     // let rePassword = document.getElementById("re-password");
    
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((res) => {
//         console.log("user",res.user);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     });
// };
// const btn=document.getElementById("signUpButton");
// btn.addEventListener("click", signUp)





// // sign in 

let signIn = ()=>{
    let email = document.getElementById("login-email");
    let password = document.getElementById("login-password");
   
    
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
        // Signed up 
        console.log("user",res.user);
        // ...
    })
    .catch((error) => {
    alert("plz Enter Your Email and password!",);
    
    });

};




// login Button 
const login=document.getElementById("login");
login.addEventListener("click", signIn);


// logout button 

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
    const user = auth.currentUser;

    if (user) {
        user.delete().then(() => {
            console.log("User account deleted successfully");
            alert("Your account has been deleted.");
            // Optionally, redirect to a different page
            window.location.href = "index.html";
        }).catch((error) => {
            console.error("Error deleting user:", error);

            if (error.code === 'auth/requires-recent-login') {
                alert("You need to sign in again before deleting your account.");
                // Handle re-authentication or redirect to the sign-in page
                auth.signOut().then(() => {
                    window.location.href = "index.html";
                });
            }
        });
    } else {
        console.log("No user is signed in.");
    }
});


