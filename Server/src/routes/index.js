const {getCharById} = require('../controllers/getCharById.js');
const {login} = require('../controllers/login.js');
const {postUser} = require ('../controllers/postUser.js')
const {postFav} = require('../controllers/postFav.js')
const {deleteFav} = require ('../controllers/deleteFav.js')

const express = require('express');
const router = express.Router();


router.get('/character/:id', (req, res) => {
    getCharById(req, res);
})

router.post('/user', async (req, res) => {
    await postUser(req, res);
  });


router.get('/login', async(req, res) => {
    await login(req, res)
})

router.post('/login', async(req, res) => {
    await login(req, res)
})

router.post('/fav', async (req, res) => {
    await postFav(req, res)
})

router.delete('/fav/:id',  async(req, res) => {
   await deleteFav(req, res)
})

module.exports = router