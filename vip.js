$.getScript('https://cstcamaro.github.io/MyApi/md5.min.js', function () {
    var skey = bossCookie.getCookie("skey")
    var t, i = "5381", n = "tencentQQVIP123443safde&!%^%1282",
        r = skey, a = [];
    a.push(i << 5);
    for (var p = 0, u = r.length; u > p; ++p) t = r.charAt(p).charCodeAt(0), a.push((i << 5) + t), i = t;
    var token = md5(a.join("") + n);
    callback = function (data){
        alert(JSON.stringify(data))
    }
    $.getScript("https://cgi.vip.qq.com/friends/all?callback=callback&g_tk="+token)
});
