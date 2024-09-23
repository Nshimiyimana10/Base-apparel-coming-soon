
function validateEmail(){
    
    let Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9{2,4}$]/;
    let result = document.getElementById("result");
    let inputValue = document.getElementById("input-value").value;
    
    if(Regex.test(inputValue)){
        result.innerHTML ="Your Email is Valid";
        result.style.color = 'blue';
        
    }
    else{
        result.innerHTML = "Please Enter Valid Email";
        result.style.color = 'red';
    }

}

let submit = document.getElementById('submit');
submit.addEventListener('click', validateEmail)

console.log(submit)