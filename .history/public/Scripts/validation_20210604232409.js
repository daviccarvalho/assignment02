/*
File Name: validation.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 04, 2021
*/

// Validation for the form
(function () {
    'use strict'
  
    // Styles to Bootstrap validation
    var forms = document.querySelectorAll('.needs-validation')
  
    // Prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()