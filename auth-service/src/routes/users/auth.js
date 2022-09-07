const express = require('express');
const router = express.Router();

/* POST signUP */
router.post('/sign-up', function(req, res, next) {
  res.status(201).send('account was created');
});
/* POST signIN */
router.post('/sign-in', function(req, res, next) {
  res.status(200).send('redirect to user profile page');
});
/* POST signOUT */
router.post('/sign-out', function(req, res, next) {
  res.status(200).send('redirect to home page');
});
/* GET current user */
router.get('/signed-user', function(req, res, next) {
  res.status(200).send('current user info');
});

module.exports = router;
