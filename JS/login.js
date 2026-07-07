
//login page

function signIn(){

    const email = document.getElementById("exampleInputEmail1").value
    const pass = document.getElementById("exampleInputPassword1").value

    if(email === "" || pass === ""){
        alert("Please enter your email and password.")
        return
    }

    if(pass.length < 8){
        alert("Your password is too weak.")
        return
    }
    window.location.href = "../html/home.html"
    alert("Login Successful! Welcome to Star Cinema 🎬")

    
}


let password = document.getElementById("exampleInputPassword1")
let strength = document.getElementById("strength")

password.addEventListener("input", function () {

    if (password.value.length == 0) {
        strength.innerHTML = ""
    }
    else if (password.value.length < 8) {
        strength.innerHTML = "🔴 Weak Password"
        strength.style.color = "red"
    }
    else {
        strength.innerHTML = "🟢 Strong Password";
        strength.style.color = "green"
    }

});