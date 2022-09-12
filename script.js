let globalIsSubmit = false;

let fn = false;
let ln = false;
let em = false;
let st = false;
let ci = false;
let zi = false;
// let success = true;


function validate(isSubmit) {

    if(isSubmit){
        globalIsSubmit = true;
    }
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let zip = document.getElementById('zip').value;
    let tandc = document.getElementById('tandc').checked;
    let state = document.getElementById('state').value;

    let error = false;

    
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(city);
    // console.log(zip);
    // console.log(tandc);

    // globalIsSubmit = isSubmit;

    if (globalIsSubmit) {
        // First Name conditions
        if (firstName.length >= 2) {
            document.getElementById('first-name-valid').style.display = "block";
            document.getElementById('first-name-invalid').style.display = "none";
            fn = true;
            // console.log('First Name is valid.');
        }
        else {
            document.getElementById('first-name-invalid').style.display = "block";
            document.getElementById('first-name-valid').style.display = "none";
            fn = false;
            error = true;
            // console.log('First Name is Invalid.')
        }

        // Last Name conditions :-
        if (lastName.length >= 2) {
            document.getElementById('last-name-valid').style.display = "block";
            document.getElementById('last-name-invalid').style.display = "none";
            ln = true;
            // console.log('Last Name is valid.');
        }
        else {
            document.getElementById('last-name-invalid').style.display = "block";
            document.getElementById('last-name-valid').style.display = "none";
            ln = false;
            error = true;
            // console.log('Last Name is Invalid.')
        }

        /* Email :-
        1.) must includes '@'
        2.) must includes '.'
        3.) Alteast 1 character before '@'
        4.) Atleast 2 characters after '.'
        */
        if (email.includes('@') &&
            email.includes('.') &&
            !email.startsWith('@') &&
            email.substr(email.lastIndexOf('.') + 1).length >= 2) {
            // !email.endsWith('.') && email.indexOf('.') != email.length-2){
            document.getElementById('email-valid').style.display = "block";
            document.getElementById('email-invalid').style.display = "none";
            em = true;
            // console.log(email.includes('@'));
        }
        else {
            document.getElementById('email-invalid').style.display = "block";
            document.getElementById('email-valid').style.display = "none";
            em = false;
            error = true;
            // console.log(email.includes('@'));
        }


        // City Conditions :-
        if (city.length >= 3) {
            document.getElementById('city-valid').style.display = "block";
            document.getElementById('city-invalid').style.display = "none";
            ci = true;
        }
        else {
            document.getElementById('city-invalid').style.display = "block";
            document.getElementById('city-valid').style.display = "none";
            ci = false;
            error = true;
        }

        /* Zip :-
        1.) must be length of 6
        2.) only numbers are allowed to enter in the input zip field (Strictly)  
        */

        // isNaN - will return true if value is NaN, !isNaN - will return true if value is number
        let numberZip = parseInt(zip);

        if (!isNaN(numberZip) && numberZip >= 100000 && numberZip <= 999999) {

            document.getElementById('zip-valid').style.display = "block";
            document.getElementById('zip-invalid').style.display = "none";
            zi = true;
        }
        else {
            document.getElementById('zip-invalid').style.display = "block";
            document.getElementById('zip-valid').style.display = "none";
            zi = false;
            error = true;
        }

        if (tandc) {
            document.getElementById('tandc-valid').style.display = "block";
            document.getElementById('tandc-invalid').style.display = "none";
        }
        else {
            document.getElementById('tandc-invalid').style.display = "block";
            document.getElementById('tandc-valid').style.display = "none";
            error = true;
        }

        if (state != 'none') {
            document.getElementById('state-valid').style.display = "block";
            document.getElementById('state-invalid').style.display = "none";
            st = true;
        }
        else {
            document.getElementById('state-invalid').style.display = "block";
            document.getElementById('state-valid').style.display = "none";
            st = false;
            error = true;
        }

        if( error === false){
            alert("Successfully Submitted");
            resetFields();
        }
    }


    // if((fn && ln && st && ci && zi && em)){
    //     alert("Successfully Submitted");
    //     // console.log(firstName);
    // }
    
    console.log(document.getElementById('first-name-invalid').style.display);

   

}

function resetFields(){

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('city').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('tandc').checked = false;
    document.getElementById('state').value = '';

    // globalIsSubmit = false;

    document.getElementById('first-name-valid').style.display = "none";
    document.getElementById('last-name-valid').style.display = "none";
    document.getElementById('email-valid').style.display = "none";
    document.getElementById('city-valid').style.display = "none";
    document.getElementById('state-valid').style.display = "none";
    document.getElementById('tandc-valid').style.display = "none";
    document.getElementById('zip-valid').style.display = "none";
}
