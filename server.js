const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('API Running'));
const Port = process.env.Port || 5000;
app.listen(Port, () => console.log('Server started on port ${Port}'));