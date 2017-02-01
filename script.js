summary = $(".summaryOuter")[0]
var isScrolledToBottom = summary.scrollHeight - summary.clientHeight <= summary.scrollTop + 1;

function scrollToBottom() {
    summary.scrollTop = summary.scrollHeight - summary.clientHeight;
}

//Display Value in div opout or numout
function display(val, outLoc) {
    outClass = "." + outLoc
    $(outClass).html(val)
}

var calcArr = [];
var lastEntry = "";

//Function Calc to Calculate
function calc(leftOp,operator,rightOp){
  switch(operator){
    case '+': return leftOp + rightOp;
    case '—': return leftOp - rightOp;
    case 'x': return leftOp * rightOp;
    case '÷': if(rightOp === 0){
        return leftOp / rightOp;
    }
    else{
      return "error"
    }

    default: console.log("Invalid Operation");
  }
}

//On clicking number buttons
$(".num-btn").click(function() {

  numValue = $(this)[0].innerText.toString()

  if(numValue === "."){
    if(/\./.test(lastEntry)){
      //Do  Nothing if already decimal point exists
    }
    else{
      lastEntry = lastEntry.toString() + numValue;
    }
  }
  else{
    if(calcArr.length === 0){
      lastEntry = lastEntry.toString() + numValue;
    }
    else if(/(\+|—|x|÷)/.test(lastEntry)){
      calcArr.push(lastEntry);//Is an arithmetic operator
      lastEntry = numValue;
    }
    else if(/[0-9]/.test(lastEntry)){
      //Is a number
      lastEntry = lastEntry.toString() + numValue;
    }
    else if(lastEntry === "" && (/(\+|—|x|÷)/).test(calcArr[calcArr.length -1].toString())){
      lastEntry = numValue;
    }
    else if (lastEntry === "" && !(/(\+|—|x|÷)/).test(calcArr[calcArr.length -1].toString())) {
      lastEntry = calcArr[calcArr.length -1].toString() + numValue;
      calcArr.pop();
    }
  }

  display(lastEntry,"numout")
  //Clear opout
  $(".opout").html("");

  display(calcArr.join(" "),"summary");
});


//On clicking operators
$(".op-btn").click(function() {

  opValue = $(this)[0].innerText.toString()
  if(calcArr.length !== 0 || lastEntry){
    if(/(\+|—|x|÷)/.test(lastEntry)){
      lastEntry = opValue;
    }
    else if(/[0-9]/.test(lastEntry)){
      //Is a number
      calcArr.push(lastEntry)
      lastEntry = opValue;
    }
    else if(lastEntry === "" && !(/(\+|—|x|÷)/).test(calcArr[calcArr.length -1].toString())){
      lastEntry = opValue;
    }
    display(lastEntry,"opout")
  }

display(calcArr.join(" "),"summary");
});


//On clicking Equals
$(".btn-eql").click(function() {
  calcArr.push(lastEntry);

  display(calcArr.join(" "),"summary");
});


//On clicking C
$("#clear").click(function() {
  $(".summary,.opout").html("");
  $(".numout").html("0");
  calcArr = [];
  lastEntry = "";
});


//On clicking backspace
$("#backspace").click(function() {
  if(lastEntry.length === 0){
    if(calcArr.length < 1){
      console.log("Empty : No Value Found");
      return;
    }

    var lastChar = calcArr[calcArr.length -1].toString();

    if(lastChar.length === 0){
      calcArr.pop();
      lastChar = calcArr[calcArr.length -1].toString();
      lastEntry = calcArr[calcArr.length -1].toString()
    }

    if(/(\+|—|x|÷)/.test(lastChar)){
      //Is an arithmetic operator
      calcArr.pop();
      display(calcArr[calcArr.length - 1],"numout");
    }
    else if(/[0-9]/.test(lastChar)){
      //Is a number
      calcArr[calcArr.length - 1] = lastChar.substring(0,lastChar.length - 1);
      if(calcArr[calcArr.length - 1] === ""){
        display(0,"numout");
      }
      else{
        display(calcArr[calcArr.length - 1],"numout");
      }
    }
    else if(/\s/.test(lastChar)){
      //Is blank
      calcArr.pop();
    }
    else{
      //error
      console.log("Problem with Code at backspace ID event");
    }
  }
  else{ // i.e if lastEntry is not empty
    if(/(\+|—|x|÷)/.test(lastEntry)){
      //Is an arithmetic operator
      lastEntry = "";
      $(".opout").html("");
    }
    else if(/[0-9]/.test(lastEntry)){
      //Is a number
      lastEntry = lastEntry.substring(0,lastEntry.length - 1);
      if(lastEntry.length === 0){
        display(0,"numout");
      }
      else{
        display(lastEntry,"numout");
      }
    }
    else if(/\s/.test(lastEntry)){
      //Is blank
      lastEntry = "";
    }

  }
  display(calcArr.join(" "),"summary");
});


// Scroll to bottom of display
$(".btn").click(function(){
  scrollToBottom();
  console.log("Array : "+calcArr+"\n"+"lastEntry : "+lastEntry)
});
