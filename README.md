# angular-seed-https-server
https server for angular-seed

Creating certificate

$ openssl genrsa -out server-key.pem 1024 
$ openssl req -new -key server-key.pem -out server-request.csr
$ openssl x509 -req -in server-request.csr -signkey server-key.pem -out server-cert.pem

Running

./https-server

