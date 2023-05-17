function verifyName() {
    let nameInput = document.getElementById('name');
    let nameError = document.getElementById('p1');
    let errorImg1 = document.getElementById('img1')

    if (nameInput.value.match(/^[a-zA-Z]+$/)) {
        nameInput.classList.remove('input-error');
        errorImg1.style.display = "none"
        nameInput.classList.add('input-succes');
        nameError.textContent = "";
        return true;
    } else {
        nameInput.classList.add('input-error');
        errorImg1.style.display = "block"
        nameInput.classList.remove('input-succes');
        nameError.textContent = "invalid name";
        return false;
    }
}

function verifyLastname() {
    let lastnameInput = document.getElementById('lastname');
    let lastnameError = document.getElementById('p2');
    let errorImg2 = document.getElementById('img2')

    if (lastnameInput.value.match(/^[a-zA-Z]+$/)) {
        lastnameInput.classList.remove('input-error');
        errorImg2.style.display = "none"
        lastnameInput.classList.add('input-succes');
        lastnameError.textContent = "";
        return true;
    } else {
        lastnameInput.classList.add('input-error');
        errorImg2.style.display = "block"
        lastnameError.textContent = "invalid lastname";
        lastnameInput.classList.remove('input-succes');
        return false;
    }
}


function verifyEmail() {
    let emailInput = document.getElementById("emailInput")
    let p = document.getElementById('p3')
    let errorImg3 = document.getElementById('img3')

    if (emailInput.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)) {
        emailInput.classList.remove('input-error')
        errorImg3.style.display = "none"
        emailInput.classList.add('input-succes')
        p.textContent = ""
        return true
    } else {
        emailInput.classList.add('input-error')
        errorImg3.style.display = "block"
        emailInput.classList.remove('input-succes')
        p.textContent = "invalid email"
        return false
    }
}


function verifyPassword() {
    let passwordInput = document.getElementById('password');
    let passwordError = document.getElementById('p4');
    let errorImg4 = document.getElementById('img4')

    if (passwordInput.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,64}$/)) {
        passwordInput.classList.remove('input-error');
        errorImg4.style.display = "none"
        passwordInput.classList.add('input-succes');
        passwordError.textContent = "";
        return true;
    } else {
        passwordInput.classList.add('input-error');
        errorImg4.style.display = "block"
        passwordInput.classList.remove('input-succes');
        passwordError.textContent = "invalid password";
        return false;
    }
}


function showPassword() {
    let passInput = document.getElementById("password");
    if (passInput.type === "password") {
        passInput.type = "text";
    } else {
        passInput.type = "password";
    }
}

function verifyInput() {

    verifyName()
    verifyLastname()
    verifyEmail()
    verifyPassword()

}
