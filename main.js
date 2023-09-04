/*

const btnElement = document.getElementById("adding");
btnElement.addEventListener("click", function() {
    let userName = document.getElementById("userName").value;
    console.log(userName);
    localStorage.setItem("userName",userName);

}); */


function newUser() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let mobilenumber = document.getElementById("mobilenumber").value;
    
    localStorage.setItem("userName",userName);
    localStorage.setItem("mobile", mobilenumber);
    localStorage.setItem("password",password);
    
    window.location = "secondhtml.html";
};
