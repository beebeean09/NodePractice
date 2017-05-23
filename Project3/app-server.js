import express from 'express';
import React from 'react';

const render = require('./SSR.js');
const app = express();

app.get('/', render.default);

const port = 3007;
app.listen(port);
console.log(`Listening on port ${port}`);
