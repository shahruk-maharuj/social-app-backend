require('dotenv').config();
const express = require('express')
const format = require('date-format');
const app = express();
const PORT = process.env.PORT || 5500;

// home route
app.get('/', (req, res) => {
    res.status(200).send('Hello Express!')
})

// instagram route
app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: 'shahrukmaharuj',
        followers: 4939,
        follows: 203,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instaSocial);
})

// facebook route
app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        username: 'shahruk.maharuj',
        followers: 3939,
        follows: 203,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instaSocial);
})

// linkedin route
app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        username: 'shahrukmaharuj',
        followers: 699,
        follows: 43,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    }
    res.status(200).json(instaSocial);
})

app.get('/api/v1/:token', (req, res) => {
    const token = req.params.token
    console.log(token);
    res.status(200).json({token})
})

// port
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});