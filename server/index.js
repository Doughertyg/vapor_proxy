const express = require('express');
const app = express();
const port = 3000;
const BodyParser = require('body-parser');

app.use(BodyParser.json());
app.use(express.static('public'));

app.listen(port, () => console.log(`listening on port ${port}!`));