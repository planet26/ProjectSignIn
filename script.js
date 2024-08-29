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

const redirectButton = document.getElementById('redirectbutton').addEventListener("mouseover", (event) => {});

onmouseover = (event) => {};

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




