const form=document.getElementById('form');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const firstName=form['firstname'].value;
    const lastName=form['lastname'].value;
    const email=form['email'].value;
    const passWord=form['password'].value;


    if(firstName ===''){
        addErrorTo('firstname','First Name is required');
    }
    if(lastName===''){
        addErrorTo('lastname','Last Name is required');
    }
    if(email=== ''){
        addErrorTo('email', 'Email is required');
    }
    if(passWord===''){
        addErrorTo('password', 'password is required');
    }
});


function addErrorTo(field, message){
    const small=form[field].parentNode.querySelector('small');
    small.innerText=message;
    small.style.opacity ='1';
}

function isValid(email){
    var re=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return re.test(string(email).toLowerCase());
}