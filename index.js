const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { default: Axios } = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/rss', async (req, res) => {
  const url = req.query.url;
  if (url) {
    const response = await axios.get(url);
    res.type('text/plain');
    res.send(response.data);
  }

})

app.listen(PORT, () => {
  console.log('App listening on port: ' + PORT);
})