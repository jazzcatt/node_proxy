
functions:


1. if file doesn't exist - create file and write data from client, send message "File was created and saved"
2. if file exist and empty - write data in file and send message "File was saved"
3. if file exist and not empty - read data from file, send it to client, rewrite file with data from client.



HOW RUN:

1. npm i   (it will install node-static)
2. npm start or node server.js
3. run browser in localhost:3000
