const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { default: Axios } = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/rss', async (req, res) => {
  console.log('Got request', req);
  try {
    const url = req.query.url;
    if (url) {
      const response = await axios.get(url);
      res.type('text/plain');
      res.send(response.data);
    }
  } catch (err) {
    console.log(err);
  }

})

app.listen(PORT, () => {
  console.log('App listening on port: ' + PORT);
})