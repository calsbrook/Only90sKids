var songsController = require('../controllers/songsController');
router.post('/songs', isLoggedIn, songsController.index);

router.get('/', function(req, res, next) {
    songsController.songDetails();
    res.send('hi')
  });
  
module.exports(router)