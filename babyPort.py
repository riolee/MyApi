# coding:utf-8
# pip3 install PyMySQL
import pymysql
import time
import re

def checkFlag():
    file_path = '/etc/mysql/mysql.conf.d/mysqld.cnf'
    check_flag = False
    setFlagFalse()
    # file_path = "mysqld.cnf"
    for line in open(file_path):
        if "bind-address" in line:
            # print(line)
            pat = re.compile("\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$")
            result = pat.findall(line)
            if (len(result) >0 and result[0] == "127.0.0.1"):
                check_flag = True
    if (check_flag == True):
        setFlagTrue()

def setFlagTrue():
    # print("set flag true")
    with open(filename) as f:
        file_str = f.read()
    with open(filename, "w") as f:
        f.write(file_str.replace("该端口未修复", "该端口已修复"))

def setFlagFalse():
    with open(filename) as f:
        file_str = f.read()
    with open(filename, "w") as f:
        f.write(file_str.replace("该端口已修复", "该端口未修复"))

while 1:
    filename = "index.html"
    checkFlag()
    time.sleep(1)
