let mText = document.getElementById("demo");

setInterval(function() {
    var d = new Date();
    var n = d.getTime();
    mText.text = n.toString;
}, 1000) 