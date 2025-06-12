const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HEY I GOT HERE')
})

app.get('/vegan', (req, res) => {
    res.send('VEGAN RECIPIES')
})

app.listen(3000, () => {
    console.log(`it's working`);
})