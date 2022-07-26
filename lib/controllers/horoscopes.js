const { Router } = require('express');
const router = Router();
const fetch = require('cross-fetch');

const originURL = 'http://ohmanda.com/api/horoscope/';

router.get('/:sign', async (req, res) => {
  const fetchURL = originURL + req.params.sign + '/';
  const horoscope = await fetch(fetchURL);
  res.json((await horoscope.json()).horoscope);
});

//trying to make a get for displaying all the data.
// .get('/', async (req, res) => {
//   const horoscopeData = await fetch(originURL);
//   const horoscopeList = horoscopeData.map((patron) => ({
//     sign: patron.sign,
//     horoscope: patron.horoscope,
//   }));
//   res.json(horoscopeList);
//   console.log(horoscopeList);
// });

//   res.json(horoscopeList);
//   console.log(res.json(horoscopeList));
// });

module.exports = router;
