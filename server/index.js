const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller');

// ENDPOINTS -------------------------------

app.get('/api/movies', getMovies);
app.delete('/api/movies/:id', deleteMovie);
app.post('/api/movies', createMovie);
app.put('/api/movies/:id', updateMovie);

// -----------------------------------------

app.listen(4004, () => {console.log('Ready to rock n roll on port 4004!')})