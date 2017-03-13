var input = document.getElementById("myInput");

input.addEventListener('keyup', checkEmail);

function checkEmail(event){
  var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var result = input.value.search(regExp);
  if (result == 0){
    input.classList.remove('red');
    input.classList.add('green');
  } else{
    input.classList.remove('green');
    input.classList.add('red');
  };
}