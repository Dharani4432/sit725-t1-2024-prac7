
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('zz/api/tech', (req, res) => {
    controller.createtech(req, res);
});

router.get('/api/tech', (req, res) => {
    controller.getAlltech(req, res);
});

router.delete('/api/tech', (req, res) => {
    controller.remove(req, res);
});


module.exports = router;