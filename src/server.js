// npm i express cors method-override mongoose bcryptjs --save
// npm install nodemon -D
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');

//Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 8080);

// WhiteList Optional
var whitelist = ['http://localhost:8080', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('Not allowed by CORS');
    }
  }
}

// This is CORS enable for all Origin! 
app.use(cors()); // Add corsOptions a cors() for access to specific a or more domain

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Routes
app.use(require('./routes/app'));
app.use(require('./routes/auth'));
app.use(require('./routes/users'));

// Server is Listenning
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
