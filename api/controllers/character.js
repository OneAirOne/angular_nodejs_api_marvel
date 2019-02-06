const marvel = require('../services/marvel');

// get all characters
exports.get_all_characters = async (req, res, next) => {
  // get all characters from the marvel service and retrieve to the client
  try {
    const response = await marvel.get_characters();
    const { data } = response;
    res.status(200).json({
      data,
    })
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  };
};

// get one characters
exports.get_character_by_id = async (req, res, next) => {
  //get one character by id from the marvel service and retrieve to the client
  const characterId = req.params.characterId
  try {
    const response = await marvel.get_character_by_id(characterId);
    const { data } = response;
    res.status(200).json({
      data,
    })
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  };
};


