const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const router = Router();

module.exports = router;

router

    .get('/', (req, res) => {;
        const zodiacList = zodiac.map((signs) => ({ id: signs.id, name: signs.name }));
        res.json(zodiacList);
    })

