const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jwt-simple');

var JWT_SECRET='hello';


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts-db');

const db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});
db.once('open', function(){
  console.log('connection established');
});
const contactRoute = require('./api/routes/contact');
const userRoute = require('./api/routes/user');
const adminRoute = require('./api/routes/admin');
const commentRoute = require('./api/routes/comment');
const oneRoute = require('./api/routes/one');
const twoRoute = require('./api/routes/two');
const threeRoute = require('./api/routes/three');
const productRoute = require('./api/routes/product');

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/client'));
app.use(express.static(__dirname +'/uploads'));

const PORT = process.env.PORT || 3000;

app.use('/api/contacts',contactRoute);
app.use('/api/users', userRoute);
app.use('/api/admin', adminRoute);
app.use('/api/comments', commentRoute);
app.use('/api/ones', oneRoute);
app.use('/api/twos', twoRoute);
app.use('/api/threes', threeRoute);
app.use('/api/products', productRoute);


app.listen(PORT, function(){
  console.log(`Server is running ${PORT}`);
});
