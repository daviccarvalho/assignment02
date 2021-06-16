// IIFE 
(function(){
    function Start()
    {
        console.log("App Starter")
    }
    
    window.addEventListener("load", Start);

})();

const pressedButton = document.getElementsById("btnSubmit")[0];

pressedButton.addEventListener("click", function (event) {
   alert("Information submitter. Thank you!")
})