
document.getElementById('login-submit').addEventListener('click', function () {
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;

    //user password
    const passWord = document.getElementById('user-password');
    const userPasswword = passWord.value;

    if (userEmail == 'morsatha123@gmail.com' && userPasswword == 1234567) {
        window.location.href = 'bank.html';
    }
    else {
        console.log('You are Wrong');
    }
});

