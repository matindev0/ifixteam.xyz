window.addEventListener("DOMContentLoaded", function() {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var register = document.getElementById("register");

  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    register.classList.add("success");
    register.innerHTML = "Registered! Please whait to review";
  }

  function error() {
    register.classList.add("error");
    register.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.register === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.register, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}