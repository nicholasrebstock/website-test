let mText = document.getElementById("text");

setInterval(function() {
    var d = new Date();
    var n = d.getTime();
    mText.text = n.toString;
}, 1000) 