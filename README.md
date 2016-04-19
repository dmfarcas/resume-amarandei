# Deploy
  ```
    npm install && bower install
    grunt
    create a nginx reverse proxy localhost:1337
    pm2 start entry.js
  ```

# Live
http://amarandei.me



# Edit stuff


### Pe calculatorul local
```
$ git clone https://github.com/dmfarcas/resume-amarandei
$ cd resume-amarandei 
$ npm install && bower install
$ atom .
Majoritatea chestiilor sunt aici: app/views/main.html
Si aici: app/index.html

Dupa ce ai editat totul: 

Ca sa vezi ce fisiere ai editat:
$ git status

Ca sa le adaugi:

$ git add app/views/main.html
$ git commit -m "Editare de chestii"
$ git push origin master
```

### Pe server
```
$ git checkout . (iti aduce fisierele inapoi la stadiul de pe repositor)
$ git pull origin master

etc..
```

