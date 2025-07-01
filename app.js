require('dotenv').config();
const express = require('express');
const hbs =require('hbs');
const app = express();
const port= process.env.PORT;

//servir
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('public'));

app.get('/holaMundo',(req,res)=>{
    res.send('holaMundo_RUT');
})
app.get('/generic',(req,res)=>{
    res.sendFile(__dirname+'/public/generic.html');
    //res.send('404 | page no found');
})
app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Joaquin Funtealba',
        titulo: 'Curso de node'
    });
    //res.sendFile('Hola Mundo');
    //res.send('404 | page no found');
})
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname+'/public/elements.html');
    //res.send('404 | page no found');
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/public/404.html');
    //res.send('404 | page no found');
})
app.listen(port, ()=>{
    console.log(process.env);
    console.log(`Se esta ejecutando en el puerto: ${port}`);
});