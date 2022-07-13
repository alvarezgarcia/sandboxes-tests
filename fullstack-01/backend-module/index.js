const express = require('express');
const app = express();
const port = 9090;

app.get('/', async (req, res) => {
	res.json({ hey: 'ho, lets go' });
});

app.listen(port, () => {
  console.log(`NodeJS server listening at http://localhost:${port}`);
});

