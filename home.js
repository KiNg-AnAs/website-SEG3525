const wrapper = document.querySelector('.wrapper');
const login= document.querySelector(".loginLink");
const register= document.querySelector(".registerLink");
const btnLogin= document.querySelector(".loginBtn-popup");
const close= document.querySelector(".icon-close");
const text= document.querySelector(".home-content");

register.addEventListener("click", ()=> {
    wrapper.classList.add("active");

})

login.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
    
})

btnLogin.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
    text.classList.add("inactive");

})

close.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
    text.classList.remove("inactive");

})

function validateLoginForm(event) {
    event.preventDefault(); 
  
    // Perform validation checks
    var usernameInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
  
    if (usernameInput.value === "" || passwordInput.value === "") {
      alert("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(usernameInput.value)) {
        alert("Please enter a valid email address.");
        return;
      }
  
    window.location.href = "home.html";
  }

  function validateRegistrationForm(event) {
    event.preventDefault(); 
  
    // Perform validation checks
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email2");
    var passwordInput = document.getElementById("password2");
    var termsCheckbox = document.getElementById("terms");
  
    if (usernameInput.value === "" || passwordInput.value === "" || emailInput.value === "") {
      alert("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
      }

    if (!termsCheckbox.checked) {
        alert("Please agree to the terms and conditions.");
        return;}
  
    window.location.href = "home.html";
  }

  function isValidEmail(email) {
    // expression for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  //sticky header
  window.onscroll= () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >20 );
  }