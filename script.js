
summary = $(".summaryOuter")[0]
var isScrolledToBottom = summary.scrollHeight - summary.clientHeight <= summary.scrollTop + 1;
function scrollToBottom(){
  summary.scrollTop = summary.scrollHeight - summary.clientHeight;
}

var calcArr = [];

// Scroll to bottom of display
$(".btn").click(scrollToBottom);


$(".num-btn").click(function(){

});

$(".op-btn").click(function(){

});

$(".btn-eql").click(function(){

});

$(".btn-misc").click(function(){
  
});
