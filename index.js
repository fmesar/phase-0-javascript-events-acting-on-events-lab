// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "100px";
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();

    }else if  (event.key === "ArrowRight"){
         moveDodgerRight()

    }
  });
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  const color = dodger.style.backgroundColor.replace("#FF69B4",'');
 
    if (left > 0) {
      dodger.style.left = `${left - 8}px`;
      dodger.style.backgroundColor = `rgb(${left * 3 + 10}, ${left * -2 }, ${left * 2})`
    }
  }
  function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const color = dodger.style.backgroundColor.replace("#FF69B4",'');
  
    if (left > 0) {
      dodger.style.left = `${left + 8}px`;
      dodger.style.backgroundColor = `rgb(${left / 3}, ${left + 2}, ${left - 7})`
    }
  }