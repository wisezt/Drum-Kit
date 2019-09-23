

var btnArr = document.querySelectorAll(".drum");

for (var i = 0 ; i < btnArr.length ; i++){
console.log(i);
btnArr[i].addEventListener("click",
  function () {
    alert("I got it");
  });


}
