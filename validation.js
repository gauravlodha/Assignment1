function validateForm(){
    if (!document.getElementById("male").checked && !document.getElementById("female").checked) 
    {
    alert ( "Please choose your Gender: Male or Female" ); 
    return false;
    }
    if(!document.getElementById("check").checked)
    {
        alert('You must agree to the terms first.');
        return false;
    }
}