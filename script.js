
summary = $(".summaryOuter")[0]
var isScrolledToBottom = summary.scrollHeight - summary.clientHeight <= summary.scrollTop + 1;
function scrollToBottom(){
  summary.scrollTop = summary.scrollHeight - summary.clientHeight;
}
