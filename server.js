const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.get('/vegan', (req, res) => {
    res.send('VEGAN RECIPIES')
})

app.listen(3000, () => {
    console.log(`it's working`);
})