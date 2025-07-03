const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Rehearsal Scheduler API running'));

// API route scaffolding
describe('dummy', () => {});

server.listen(4000, () => console.log('API running on port 4000'));