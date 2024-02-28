
const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require('axios');
const underscore = require('underscore');

//settings
app.set('port', process.env.PORT || 3000);

/*
//middlewares
app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));    //Trata de entender datos desde los formularios solo textos    
app.use(express.json());    //Permite recibir formatos json

//routes
app.use(require('./routes/index'));
app.use(require('./routes/peliculas'));
*/


app.get('/getAll',async (req,res)=>{
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await axios.get(url)
    res.status(200).json({result:response.data})
});

app.post('/getAll',async (req,res)=>{
    const {name, status, species, type, gender, origin } = req.body;
    const id = movies.length +1;
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await axios.get(url)
    res.status(200).json({result:response.data})
    res.send("Recibido")
});

app.delete('/:id',async (req,res)=>{
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await axios.get(url)
    res.status(200).json({result:response.data})
    res.send("Eliminada")
});


//Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});