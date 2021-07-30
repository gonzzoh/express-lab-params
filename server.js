const express = require('express');
const app = express();

const port = 4000;

app.listen(port, () => {
    console.log(`your app is running on port: ${port}`)
})

app.get('/greeting', (req, res) => {
    res.send(`wadditdeww`)
});

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`wassup ${name}`)
})
