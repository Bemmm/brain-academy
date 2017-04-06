function test(){
  var wrapper = document.getElementById('wrapper');
  for(var i=0; i<10; i++){
    var newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.setAttribute('onclick', 'changeColor(this)');
    newDiv.setAttribute('onmouseover', 'showHiddenBlock("block")');
    newDiv.setAttribute('onmouseleave', 'showHiddenBlock("none")');
    wrapper.appendChild(newDiv);
  }
};
function changeColor(box){
  var boxes = document.getElementsByClassName('box');
  for(var i=0; i<boxes.length; i++){
    boxes[i].classList.remove('green');
  };
  box.classList.toggle('green');

}

function showHiddenBlock(action){
  var hidden = document.getElementById('hiddenElement');
  hidden.style.display = action;
}
test();