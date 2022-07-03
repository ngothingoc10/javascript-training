function addClass() {
  let ele = document.getElementById('logo');
  /* thêm class*/
  console.log('ele: ', ele);
  // ele.classList.add('title', 'color', 'background');
  ele.className += ' title color background';
}

function removeClass() {
  let removeELe = document.getElementById('logo');
  removeELe = removeELe.classList.remove('title');
  
}

function toggleClass() {
  var element = document.getElementById("logo");
  element.classList.toggle("title");
}