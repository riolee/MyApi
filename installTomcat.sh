sudo apt-get update
sudo apt-get install default-jdk
sudo groupadd tomcat
cd /tmp
curl -O http://apache.mirrors.ionfish.org/tomcat/tomcat-8/v8.5.45/bin/apache-tomcat-8.5.45.zip
sudo mkdir /opt/tomcat
sudo tar xzvf apache-tomcat-8*tar.gz -C /opt/tomcat --strip-components=1
cd /opt/tomcat
sudo chgrp -R tomcat /opt/tomcat
sudo chmod -R g+r conf
sudo chmod g+x conf
sudo update-java-alternatives -l
sudo systemctl daemon-reload
sudo systemctl enable tomcat
sudo systemctl start tomcat
