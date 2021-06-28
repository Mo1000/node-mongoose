
const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

     Dishes.create({
        name: 'Uthappizza',
        description: 'test'

    })
        .then((dish) => {
            console.log(dish);
            /**Elle troube tous les dishes  dans la BD et les rend disponible
             pour l'utilisateur*/
            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);
            /**dans le premier then on trouve tout les plats et ici on les affiches
             puis on supprimes tout les plats de la bd*/
            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});