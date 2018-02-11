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
    var obj1 = document.getElementById('text1');
    if(trimfield(obj1.value) == '') 
    {      
         alert("Please Provide Details!");
         obj1.focus();
         return false;       
    }
}
function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}