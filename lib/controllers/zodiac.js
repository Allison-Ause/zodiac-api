const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const router = Router();

module.exports = router;

router
  .get('/search', (req, res) => {
    const searchDate = req.query.date.split('/').slice(0, 2);
    const distilledDate = new Date(searchDate).join('/');
    let zodiac;
    if (Number(searchDate[0]) === 12 && searchDate[1] >= 22) {
      zodiac = zodiac.find((zodiac) => zodiac.name === 'capricorn');
      res.json(zodiac);
    } else {
      zodiac = zodiac.find((zodiac) => {
        const startDate = new Date(zodiac.dates.slice(0, 6));
        const endDate = new Date(zodiac.dates.slice(9));
        return startDate <= distilledDate && endDate >= distilledDate;
      });
      res.json(zodiac);
    }
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
