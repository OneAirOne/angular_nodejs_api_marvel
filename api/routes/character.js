const express = require('express');
const router = express.Router();

const characterController = require('../controllers/character');

router.get('/', characterController.get_all_characters);
router.get('/:characterId', characterController.get_character_by_id);

module.exports = router;