# coding:utf-8
import time
import requests


def checkFlag():
    setFlagFalse()
    try:
        url = 'http://127.0.0.1:81/backup/'
        s = requests.get(url)
        status = s.status_code
        if (status == 403):
            setFlagTrue()
    except:
        print("connect nginx 81 port failure!")

def setFlagTrue():
    # print("set flag true")
    with open(filename) as f:
        file_str = f.read()
    with open(filename, "w") as f:
        f.write(file_str.replace("该路径未关闭", "该路径已关闭"))

def setFlagFalse():
    with open(filename) as f:
        file_str = f.read()
    with open(filename, "w") as f:
        f.write(file_str.replace("该路径已关闭", "该路径未关闭"))

while 1:
    filename = "index.html"
    checkFlag()
    time.sleep(1)
