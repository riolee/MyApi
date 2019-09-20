# coding:utf-8
import time
import requests

def checkFlag():
    setFlagFalse()
    try:
        url = 'http://127.0.0.1:8080/manager'
        username = "tomcat"
        password = "tomcat"
        s = requests.get(url,auth=(username,password))
        status = s.status_code
        if (status == 403):
            setFlagTrue()
    except:
        print("connect tomcat failure")


def setFlagTrue():
    # print("set flag true")
    with open(filename) as f:
        file_str = f.read()
    with open(filename, "w") as f:
        f.write(file_str.replace("漏洞未修复", "漏洞已修复"))


def setFlagFalse():
    with open(filename) as f:
        file_str = f.read()
    with open(filename, "w") as f:
        f.write(file_str.replace("漏洞已修复", "漏洞未修复"))


while 1:
    filename = "index.html"
    checkFlag()
    time.sleep(1)
