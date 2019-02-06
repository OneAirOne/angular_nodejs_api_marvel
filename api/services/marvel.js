const axios =  require('axios');
const crypto = require('crypto');

const {
  MARVEL_API_ROOT,
  MARVEL_PRIVATE_KEY,
  MARVEL_PUBLIC_KEY
} = require('../bootstrap/env');

const ts = new Date().getTime();
const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');

function get_characters() {
  return new Promise( async function(resolve, reject) {
    try {
      // 1) prepare request to marvel API
      const limit = 20;
      const offset = 100;
      const url = `${MARVEL_API_ROOT}/characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
      // 2) make request to marvel API
      console.log('REQUEST: ', url);
      const response = await axios.get(url);
      resolve(response.data);
    } catch (err) {
      console.log('error getting data from marvel api', err);
      reject('error getting data from marvel api');
    };
  });
};

function get_character_by_id(characterId) {
  console.log('get_character_by_id', characterId);
  return new Promise( async function(resolve, reject) {
    try {
      // 1) prepare request to marvel API
      const url = `${MARVEL_API_ROOT}/characters/${characterId}?&ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
      // 2) make request to marvel API
      console.log('REQUEST: ', url);
      const response = await axios.get(url);
      // console.log('RESPONSE', response.data);
      resolve(response.data);
    } catch (err) {
      console.log('error getting data from marvel api', err);
      reject('error getting data from marvel api');
    };
  });
};

module.exports = {
  get_characters,
  get_character_by_id,
};