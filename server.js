const express = require('express');
const app = express();

const port = 4000;

app.listen(port, () => {
    console.log(`your app is running on port: ${port}`)
})

// app.get('/greeting', (req, res) => {
//     res.send(`wadditdeww`)
// });

// app.get('/greeting/:name', (req, res) => {
//     const name = req.params.name
//     res.send(`wassup ${name}`)
// })

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     let tipTotal = (req.params.tipPercentage/req.params.total) * 100
//     res.send(`The total tip will be: ${tipTotal}`)
// })

let fortunes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/magic/:question', (req, res) => {
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const questions =  req.params.question
    res.send(`${questions}..? ${fortune}`)
})