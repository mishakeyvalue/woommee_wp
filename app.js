const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

const apiController = require('./Controllers/apiController');
apiController(app);

app.listen(port);
console.log('Server is listening at port ' + port);