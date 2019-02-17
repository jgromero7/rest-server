const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rest-api', {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
})
.then(db => console.log('---> DB is Connected'))
.catch(err => console.log(err));
