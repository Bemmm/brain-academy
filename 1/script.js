function fetch(){
    var resObj = {};
    var group = document.getElementById('inputGroup');
    var elements = group.getElementsByTagName('input');
    console.log(elements);
    for(var i=0; i<elements.length; i++){
        var id = elements[i].getAttribute('id');
        resObj[id] = elements[i].value;
    };
    var input = document.createElement('input');
    input.setAttribute('type','email');
    input.setAttribute('placeholder','enter some text');
    input.classList.add('box');
    input.classList.add('grey');
    input.classList.remove('box');
    console.log(input.classList);
    // group.appendChild(input);
    group.insertBefore(input, elements[0]);
// _______________________________________________-
    var button = document.getElementById('myButton');

    document.getElementById('inputGroup').removeChild(button);
}