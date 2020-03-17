/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const app = express();
const port = 8000;

app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) return res.status(400).json({ msg: 'not url provided for proxy' });

    const { data } = await axios.get(url);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal Server Error.' });
  }
});

app.listen(port, () => console.log(`Proxy app listening on port ${port}!`));
