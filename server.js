const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'dej9Dow2',
    database : 'smart-brain'
  }
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send(database.users) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', register.handleRegister(db, bcrypt))
app.get('/profile/:id', profile.handleProfile(db))
app.put('/image', image.handleImage(db))
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(3001, () => {
	console.log('smart-brain-api is running on port 3001');
})