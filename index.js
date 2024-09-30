import express from 'express';
// create an express app
const app = express();

// define route
app.get('/hello', (req, res, next) => {
    console.log(req.headers);
    res.json('You visited the hello endpoint');
});

app.get('/goodbye',(req, res, next) => {
    console.log(req.query);
    res.json('See you later');
});


// listen for incoming requests
app.listen(3000, function() {
    console.log('App is listening on port 3000')
});