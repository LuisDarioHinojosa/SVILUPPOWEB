var user = prompt("Tell me your name");
var message = "Hello " + user;
document.getElementById("gretting").onclick = function () {
    document.getElementById("gretting").style.display = "none";
    alert(message);
}
