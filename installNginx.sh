sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
sudo yum repolist
sudo yum install nginx
sudo systemctl enable nginx
sudo systemctl start nginx
sudo firewall-cmd --zone=public --permanent --add-service=http
sudo firewall-cmd --reload
sudo sudo firewall-cmd --list-service
