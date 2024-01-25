//your JS code here. If required.

const submit = document.querySelector("#submit");
const isChecked = document.querySelector("#checkbox");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");


document.addEventListener("DOMContentLoaded",()=>{


    const savedUser = localStorage.getItem("username");

    if(savedUser){
        const existingUser = document.createElement("button");
        existingUser.id = "existing";
        existingUser.textContent = 'Login as existing user';

        document.body.appendChild(existingUser);

        existingUser.addEventListener('click', function () {
            alert('Logged in as ' + savedUser);
          });
    }
})


submit.addEventListener("click",(e)=>{

    e.preventDefault();

    if(isChecked.checked){
        localStorage.setItem("username",JSON.stringify(userName.value));
    }
    alert('Logged in as ' + userName.value);
   
})