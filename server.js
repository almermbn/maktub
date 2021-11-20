var express = require('express'),
app = express(),
port = process.env.PORT || 21195,
//mongoose = require('mongoose'),
email = require('./api/models/email.model'),
bodyParser = require('body-parser');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/maktub',  { useNewUrlParser: true, useUnifiedTopology: true  });
//mongoose.connect('mongodb://maktubAdmin:123test@ds157923.mlab.com:57923/heroku_r1pgdkc9',  { useNewUrlParser: true, useUnifiedTopology: true  });

//const db = mongoose.connection;

// db.on('error', err => {
//   console.error(`Error while connecting to DB: ${err.message}`);
// });
// db.once('open', () => {
//   console.log('DB connected successfully!');
// });

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
		);
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var emailRoutes = require('./api/routes/email.routes');
emailRoutes(app);

app.listen(port);
console.log('Server started on: ' + port);
