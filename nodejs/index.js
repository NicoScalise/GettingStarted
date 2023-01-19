console.log("Start:")

const stampa = require("./utils")

stampa("Uso funzione stampa del modulo utils.")

const users = require("./users")

stampa(users.user1)

stampa(__dirname,__filename)


const http = require("http");

const fs = require('fs');

const path = require("path");


const EventEmitter = require("events");
const customEmitter = new EventEmitter();

const middlewareProva = require('./middlewareProva')
const auth = require('./auth')



customEmitter.on("messaggio", (content, number)=>{
    stampa(` Messaggio ricevuto: ${content}, ${number}` );
})

customEmitter.emit("messaggio", "Contenuto del mesaggio", 94);

const express = require('express')
const app = express()

app.use(middlewareProva)

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname + "/html"})
})

app.get('/about', (req,res) => {
    res.sendFile('about.html', {root: __dirname + "/html"})
})

app.get('/area', auth, (req, res) => {
    res.send('Area privata')
})

app.get('/users/:id/:tel/:nome', (req, res) => {
    stampa(req.params)
    res.send("ID:"+req.params.id)
})

app.get('/users/search', (req,res) => {
    const {nome, cognome} = req.query
    stampa(nome+" "+cognome)
    res.send(nome+" "+cognome)
})



app.all('*', (req,res) => {
    res.send('<h1>Risorsa non trovata</h1><p>Ritorna alla <a href="/"> home </a></p>');
})


app.listen(3000)

