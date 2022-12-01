function onSubmit() {
    if (document.getElementById('password').value == 'chegg530') {
        window.location.href = 'chegg_full_version.html'; 
       }else{ 
           document.getElementById("alert").innerHTML = "Please try again.";
       }
}



