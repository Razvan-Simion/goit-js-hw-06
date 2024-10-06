let loginFormImput = document.querySelectorAll('.login-form input, .login-form button');

console.dir(loginFormImput);

const box = {
    email: "",
    password: "",
};

let forms = {
    email: loginFormImput[0],
    password: loginFormImput[1],
    login: loginFormImput[2],
};

forms.login.addEventListener('click', (event) => {
    event.preventDefault();  
    
    box.email = forms.email.value;
    box.password = forms.password.value;
    
    let check = 1
    for (let i = 0; i < loginFormImput.length - 1; i++) {
        if (loginFormImput[i].value === "") {
            alert("Completati toate campurile")
            check = 0
            break
        }
    }
    
    if (check) {
        console.log(`Email: ${box.email}`);
        console.log(`Password: ${box.password}`);
    }
    document.querySelector(".login-form").reset();
});



