const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { default: Axios } = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/rss', async (req, res) => {
  console.log('Got request');
  try {
    const url = req.query.url;
    if (!url) {
      res.sendStatus(400)
      return;
    }

    console.log('Querying...' + url);
    const response = await axios.get(url);
    console.log('Got response')
    res.type('text/plain');
    res.send(response.data);

  } catch (err) {
    console.log('Error occured: ', err);
    res.sendStatus(404)
  }

})

app.listen(PORT, HOST, () => {
  console.log('App listening on port: ' + PORT + ' host: ' + HOST);
})