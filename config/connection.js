// Due to issues with computer, MongoDB Atlas was required - per Instructor Anthony Cooper. 

const { connect, connection } = require('mongoose');
require('dotenv').config();

const connectionString =
  process.env.MONGODB_URI || `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.qu5az.mongodb.net/socialDB?retryWrites=true&w=majority`;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
