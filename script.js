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

$(".btn-misc").click(function() {

});
