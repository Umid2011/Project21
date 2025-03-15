function func(){
    let fullName = document.getElementById("fullName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user1 = {
        fullName: fullName,
        username: username,
        password: password,
        email: email
    }
    let email = document.getElementById("email").value;
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "login.html";
};
func();