const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const router = Router();

module.exports = router;

router
  .get('/search', (req, res) => {
    const searchDate = req.query.date.split('/').slice(0, 2);
    const distilledDate = new Date(searchDate).join('/');

    console.log('date is:', searchDate);
  })

  .get('/:id', (req, res) => {
    const zodiacSign = zodiac.find((sign) => sign.id === req.params.id);
    res.json(zodiacSign);
    console.log(zodiacSign);
  })

  .get('/', (req, res) => {
    const zodiacList = zodiac.map((signs) => ({
      id: signs.id,
      name: signs.name,
    }));
    res.json(zodiacList);
  });

//add get route to zodiac router that has the search route.
//inside the handler get the date query parameter
//req.query['date'] gives you the content after the equal sign.
//newDate thing to make it look pretty.
