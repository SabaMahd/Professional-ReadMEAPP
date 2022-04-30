const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

//app.use(require('./routes'));
app.use('*', (req,res) => res.status(404).json({error: 'Not Found'}))


// Use this to log mongo queries being executed!
mongoose.set('debug', true);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
});
