const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

routes.get('/posts', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({hello: "World!"});
})

module.exports = routes;