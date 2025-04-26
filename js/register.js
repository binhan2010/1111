// if(localStorage.getItem("currentUser")){
//     location.href = "./index.html";
// }
let form = document.querySelector("form");
form.addEventListener("submit",(e) => {
    e.preventDefault();


    let username = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;


    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let email1 = /@/g; 

    if(username.length < 6){
        alert("Username must be at least 6 characters");
    } else if (password.length < 8 ){
        alert("Password must be at least 8 characters");
    } else if(!password.match(lowerCaseLetter)){
        alert("Password must be contain a lowerCase letter")
    } else if(!password.match(upperCaseLetter)){
        alert("Password must be contain a upperCase letter")
    } else if(!password.match(numbers)){
        alert("Mật khẩu đảm bảo có số và kí tự đặc biệt")
    }else if(!email.match(email)){
        alert("Email sai cú pháp")
    } else {
        if(localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));

            users.push({
                email,
                password,
                username
            });
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            localStorage.setItem(
                "users",
                JSON.stringify([
                {
                    email,
                    password,
                    username,
                }
            ])
            );
        }
        alert("Đăng ký thành công!!!");
        location.href = "./login.html";
    }
});
