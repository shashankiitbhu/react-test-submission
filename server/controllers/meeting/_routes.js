const express = require('express');
const auth = require('../../middelwares/auth');

const router = express.Router();
const { add, index, view, deleteData, deleteMany } = require('./meeting');

router.post('/',auth, add);
router.get('/', index);
router.get('/view/:id', view);
router.delete('/:id', deleteData);
router.post('/deleteMany', deleteMany);

module.exports = router;