// TODO 1: Import Express
const express = require('express');
const cors = require('cors');

// TODO 2: Create the Express app and store it in a variable named app
const app = express();


// TODO 3: Allow React to access the server
app.use(cors());


// TODO 5: Create the home route "/"
app.get('/', (req, res) => {
    res.send("Welcome to the Home Page!");
});


// TODO 6: Create the "/about" route
app.get('/about', (req, res) => {
    res.send("This is the About page for the SWE 363 Backend Lab.");
});


// TODO 7: Create the "/student" route



// TODO 4: Start the server on port 3000
