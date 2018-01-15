const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const config = require('./config/database');


// Connect To Database
mongoose.connect(config.database, { useMongoClient: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const settings = require('./routes/settings.routes');
const users = require('./routes/users.routes');
const students = require('./routes/students.routes');
const feesdetails = require('./routes/feesdetails.routes');
const payments = require('./routes/payments.routes');

// Port Number
const port = process.env.port || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/settings', settings);
app.use('/users', users);
app.use('/students', students);
app.use('/feesdetails', feesdetails);
app.use('/payments', payments);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});



// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
