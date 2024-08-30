if (localStorage.getItem("movepage") === "true"){
    localStorage.setItem("movepage","false");
    Redirect();}

function Redirect() {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";}

    const signUp = document.getElementById('signup').addEventListener('click', function(){
    const signupUserName = document.getElementById("signupInput").value;
    const signupUserPassword = document.getElementById("signupPassword").value;
   
    localStorage.setItem("username", signupUserName);
    localStorage.setItem("password", signupUserPassword);  
    
    if(localStorage.getItem("username") != ""&& localStorage.getItem("password")) {
        prompt("You have successfully signed up"); 
    }else {
        prompt("Error");
    }
}
)


const signIn = document.getElementById('signin').addEventListener('click', function(){
    const signinUserName = document.getElementById('signinInput').value;
    const signinPassword = document.getElementById('signinPassword').value;

    if(signinUserName === localStorage.getItem("username") && signinPassword === localStorage.getItem("password")) {
              prompt("Welcome to the site.");
              Redirect();
              setTimeout(function() {
                Redirect();
                 }, 100);
                 localStorage.setItem("movepage","true");
                 if (localStorage.getItem("movepage") === "true"){
                    Redirect();
                }else{
                    
                    
                }
    }else{
        prompt("Invalid username or password.");
    }
})



/*if(choiceOne === "Y" || choiceOne === "y") {
   
} else {
    prompt("Please close the website if you do not want to sign in.");
}*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


addEventListener("load", (event) => {});

onload = (event) => {modal.style.display = "block";};


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

//var toggleSignInButton = document.getElementById('signinb').addEventListener('click', toggleSignIn()
    
//)

// Initially hide the sign-in and sign-up sections
document.querySelector('.signint').classList.add('hide');
document.querySelector('.signupt').classList.add('hide');

// Show the sign-up section and hide the sign-in section when signupb is clicked
document.getElementById('signupb').addEventListener('click', function() {
    document.querySelector('.signint').classList.toggle('hide');
    document.querySelector('.signupt').classList.add('hide'); // Ensure sign-in is hidden
    modal.style.display = "none";
});

// Show the sign-in section and hide the sign-up section when signinb is clicked
document.getElementById('signinb').addEventListener('click', function() {
    document.querySelector('.signupt').classList.toggle('hide');
    document.querySelector('.signint').classList.add('hide'); // Ensure sign-up is hidden
    modal.style.display = "none";
});


/*var signInScreen = document.getElementById('signint');
 
var signUpScreen = document.getElementById('signupt');

var toggleSignUpButton = document.getElementById('signupb').addEventListener('click', toggleSignUp() 

)
toggleSignInButton.onclick = function(){
    modal.style.dislay = "none";
    signInScreen.style.display = "block";
    signUpScreen.style.display = "none";
}
toggleSignUpButton.onclick = function(){
    modal.style.dislay = "none";
    signInScreen.style.display = "none";
    signUpScreen.style.display = "block";
}*/