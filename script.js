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
lastCalculatedValue = "";

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

function calculateString(str){

}

//On clicking number buttons
$(".num-btn").click(function() {

  numValue = $(this)[0].innerText.toString()

  if(calcArr.length === 0){
    lastchar = "";
  }
  else{
    lastcharN = calcArr[calcArr.length -1].toString();
  }


  if(numValue === "."){
    if(calcArr.length === 0){
      calcArr.push("0.");
    }
    else if(/\./.test(lastcharN)){
      //Do  Nothing if already decimal point exists
    }
    else if(parseFloat(lastcharN) === 0){
      calcArr.pop();
      calcArr.push("0.");
    }
    else if((/(\+|—|x|÷)/).test(lastcharN)){

      calcArr.push("0.");
    }
    else{
      calcArr[calcArr.length -1] = lastcharN + ".";
    }
  }
  else{
    if(calcArr.length === 0){
      calcArr.push(numValue);
    }
    else if(lastcharN === "0"){
      calcArr.pop();
      calcArr.push(numValue);
    }
    else if(/(\+|—|x|÷)/.test(lastcharN)){
      calcArr.push(numValue);
    }
    else if(/[0-9]/.test(lastcharN)){
      //Is a number
      calcArr[calcArr.length -1] = lastcharN + numValue;
    }
  }

  if(calcArr.length === 0){
    display("0","numout")
  }
  else if(/(\+|—|x|÷)/.test(calcArr[calcArr.length -1].toString())){
    display(calcArr[calcArr.length -1].toString(),"opout");
  }
  else{
    display(calcArr[calcArr.length -1].toString(),"numout");
  }
  //Clear opout
  $(".opout").html("");

  display(calcArr.join(" "),"summary");
});


//On clicking operators
$(".op-btn").click(function() {

  if(/\.$/.test(calcArr[calcArr.length -1].toString())){
    // If number ends with a decimal point, suffix 0
    calcArr[calcArr.length -1] = calcArr[calcArr.length -1].toString() + "0"
  }

  lastchar = calcArr[calcArr.length -1].toString();
  opValue = $(this)[0].innerText.toString()

  if(calcArr.length === 0){
    //Do Nothing
  }
  else if(calcArr.length !== 0 && !(/(\+|—|x|÷)/).test(lastchar)){
    calcArr.push(opValue);
  }
  else if((/(\+|—|x|÷)/).test(lastchar)){
    calcArr.pop();
    calcArr.push(opValue);
  }


display(opValue,"opout")
display(calcArr.join(" "),"summary");
});


//On clicking Equals
$(".btn-eql").click(function() {

  display(calcArr.join(" "),"summary");
});


//On clicking C
$("#clear").click(function() {
  $(".summary,.opout").html("");
  $(".numout").html("0");
  calcArr = [];
  lastCalculatedValue = "";
});


//On clicking backspace
$("#backspace").click(function() {

  lastchar = calcArr[calcArr.length -1].toString();

  if(calcArr.length === 0){
    // Do nothing
  }
  else if(/(\+|—|x|÷)/.test(lastchar)){
    //Is an arithmetic operator
    calcArr.pop();
    $(".opout").html("");
  }
  else if(/[0-9]/.test(lastchar)){
    //Is a number
    calcArr[calcArr.length -1] = lastchar.substring(0,lastchar.length - 1);
    if(calcArr[calcArr.length -1].toString() === ""){
      calcArr.pop();
    }
    display(lastchar,"numout")
  }


  display(calcArr.join(" "),"summary");
});


// Scroll to bottom of display
$(".btn").click(function(){
  scrollToBottom();
  console.log("Array : "+calcArr+"\n"+"Clicked : "+$(this)[0].innerText)
});
