var user = document.getElementById('user');
var pass = document.getElementById('pass');
var btn = document.getElementById('btn');
var lc= document.querySelector('.loginContainer')
var sc=document.querySelector('.signupContainer')
var sName=document.getElementById('sName')
var sEmail= document.getElementById('sEmail')
var sPass= document.getElementById('sPass')

const admin = 'admin';
const password = '123'; 

function checkCredentials() {
    if (user.value === admin && pass.value === password) {
        var link = btn.getAttribute('data-link');
        
        window.open(link);
        clearInputFields();

    } else {
        alert('Please enter valid user-id and password');
    }
}

function signup(){
 lc.style.display='none';
 sc.style.display='flex';
}
function registered(){
    clearInputFields();

    alert('Your account has been registered');
    lc.style.display='flex';
    sc.style.display='none';
    
}
function clearInputFields() {
    // Clear the input fields
    user.value = '';
    pass.value = '';
    sName.value='';
    sEmail.value='';
    sPass.value='';

}