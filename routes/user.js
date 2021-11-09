const { Router } = require('express');
const { usersGet, 
        userPost, 
        userPut, 
        userPatch, 
        userDelete } = require('../controllers/user');

const router = Router();

router.get('/', usersGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);

module.exports = router;