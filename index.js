const express = require('express');

//initialize express routes
const app = express();

//inport routes
app.use('/api' , require('./routes/api'));

//listen on port 8000
app.listen(process.env.port || 8000, () => console.log('listening at port 8000'));
