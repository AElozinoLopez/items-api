const express = require('express');
require('dotenv').config();  // to invoke the environment variable installed and declared in the .env file
const itemRouter = require('./routes/item')  // requiring the exported route

const app = express();

// middlewares
app.use(express.json());

//routes middleware
app.use('/items', itemRouter);

// default route - defining the default route whenever the api is called
app.get('/', (req, res) => {
    res.send('Welcome to The Items API');
})



app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})