const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


// ВМЕСТО bodyParser МОЖНО ПИСАТЬ ТАК
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form-submitted', (req, res) => {
    const answer = req.body.firstname + ' ' + req.body.lastname + ' ' + req.body.email + ' ' + req.body.course;
    res.send('Your answers are: ' + ' ' + answer);
})

// app.get('/vegan', (req, res) => {
//     res.send('VEGAN RECIPIES')
// })

app.listen(3000, () => {
    console.log(`it's working`);
})