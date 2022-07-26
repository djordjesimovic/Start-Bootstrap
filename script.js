const form = document.querySelector('.subscribe-form');
const mailInput = document.querySelector('.email');
const errors = document.querySelector('.error-messages');

form.addEventListener('submit', e =>{
    e.preventDefault();

    if(mailInput.value === ''){
        errors.innerText = '';
        mailInput.style.border = '2px solid red';
        errors.innerText = 'Email Addres is Required';
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailInput.value))){
        errors.innerText = '';
        mailInput.style.border = '2px solid red';
        errors.innerText = 'Email Addres is Invalid';
    }
    else{
        errors.innerText = '';
        mailInput.style.border = '2px solid green';
        errors.innerHTML = '<p><strong>Form submission successful!</strong></p> <p>To activate this form, sign up at <br> <br> <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></p>'
    }
})