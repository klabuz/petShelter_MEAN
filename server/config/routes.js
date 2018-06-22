const mongoose = require('mongoose'),
        pets = require('../controllers/pets'),
        path = require('path');

module.exports = (app) => {

    app.get('/api/pets', (req, res) => {
        pets.retrieveAll(req, res);
    })

    app.get('/api/pets/:id', (req, res) => {
        pets.retrieveById(req, res);
    });

    app.post('/api/pets', (req, res) => {
        pets.create(req, res);
    });

    app.put('/api/pets/:id', (req, res) => {
        pets.updateById(req, res);
    });

    app.delete('/api/pets/:id', (req, res)=> {
        pets.removeById(req, res);
    });


    app.post('/api/pets/likes/:id', (req, res) => {
        pets.voteUp(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}