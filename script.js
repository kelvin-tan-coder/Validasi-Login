const inputEmail = document.querySelector('#email')
const inputpassword = document.querySelector('#password')
const buttonsubmit = document.querySelector('#login')

const credentials = {
    email: 'a',
    password: 'b'
}



buttonsubmit.addEventListener('click', () => {
    if (inputEmail.value === credentials.email && inputpassword.value === credentials.password) {
        alert('login berhasil');

    } else if (inputEmail.value !== credentials.email &&inputpassword.value === credentials.password) {
        alert('salah email cuy');  
        
    } else if (inputEmail.value === credentials.email &&inputpassword.value !== credentials.password) {
        alert('salah pass cuy');    

    } else {
        alert('salah dua cuy');
    }
    
})

