//maintain all routes here


const express = require('express');
const app = express();

var mainRoute = require('./routes/user.js');
var customerRoure = require('./routes/customer.js')


// Mount the router
app.use('/user', mainRoute);
app.use('/customer', customerRoure)


// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
