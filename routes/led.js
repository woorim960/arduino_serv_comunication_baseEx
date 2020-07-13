/* routes/led.js */

// 라우팅을 위한 기본 모듈 포함
const express = require('express'),
  router = express.Router(),
  serialPort = require('../arduino/serial-port'); // 시리얼 통신을위한 모듈 포함

// 라우팅
router.get('/', (req, res) => {
  res.render('led/management');
});

router.post('/on', (req, res) => {
  serialPort.open(() => {

    serialPort.write('1', (err, results) => {
      // LED 켜짐
      if (err) throw err;
      res.json(true);
    });
  });
});

router.post('/off', (req, res) => {
  serialPort.open(() => {

    serialPort.write('0', (err, results) => {
      // LED 꺼짐
      if (err) throw err;
      res.json(true);
    });
  });
});

// 모듈 내보내기
module.exports = router;