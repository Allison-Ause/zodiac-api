const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const router = Router();

module.exports = router;

router
  .get('/:id', (req, res) => {
    const zodiacSign = zodiac.find((sign) => sign.id === req.params.id);
    res.json(zodiacSign);
  })

  .get('/', (req, res) => {
    const zodiacList = zodiac.map((signs) => ({
      id: signs.id,
      name: signs.name,
    }));
    res.json(zodiacList);
  });
