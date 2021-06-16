/*
File Name: app.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 04, 2021
*/

// IIFE 
(function(){
    function Start()
    {
        console.log("App Starter")

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!webkitConvertPointFromNodeToPage("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }
    
    window.addEventListener("load", Start);

})();