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

// Scroll to bottom of display
$(".btn").click(function(){
  scrollToBottom
});


$(".num-btn").click(function() {

});

$(".op-btn").click(function() {

});

$(".btn-eql").click(function() {

});

$("#clear").click(function() {
  $(".summary,.opout").html("");
  $(".numout").html("0");
  calcArr = [];
});

$("#backspace").click(function() {

  if(calcArr.length < 1){
    console.log("Empty : No Value Found");
    return;
  }

  var lastChar = calcArr[calcArr.length -1].toString();
  console.log(lastChar);

  if(lastChar.length === 0){
    calcArr.pop();
    lastChar = calcArr[calcArr.length -1].toString();
    console.log("If 1");
  }

  if(/(\+|—|x|÷)/.test(lastChar)){
    //Is an arithmetic operator
    calcArr.pop();
    console.log("If 2");
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
    console.log("If 3");
  }
  else if(/\s/){
    //Is blank
    calcArr.pop();
    console.log("If 4");
  }
  else{
    //error
    console.log("Problem with Code at backspace ID event");
    console.log("If 5");
  }
});
