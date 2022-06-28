setTimeout(() => {
  console.log('inside the function')
}, 2000);

console.log('Chờ đợi');
setTimeout(function () {
  console.log('hihi')
}, 5000)

console.log('before')
setTimeout(() => {
// runs after 2 seconds
console.log('inside the function')
}, 2000)
console.log('after')

function doHomework(subject, callback) {
  setTimeout( function(){
      console.log(`Bắt đầu làm bài tập ${subject}.`);
      callback();
  }, 5000);
  
}

function alertFinished(){
  console.log('Làm bài tập xong!');
}
doHomework('Toán', alertFinished);