# angular-seed-https-server
https server for angular-seed

Derived from the original http-server

Creating certificate

$ openssl genrsa -out server-key.pem 1024<br> 
$ openssl req -new -key server-key.pem -out server-request.csr<br>
$ openssl x509 -req -in server-request.csr -signkey server-key.pem -out server-cert.pem<br>

Running

./https-server

