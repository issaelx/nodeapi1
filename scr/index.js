const express = require('express');
const app = express();
const morgan = require('morgan');
//setings
app.set('port',process.env.PORT || 3000)
app.set('json spaces',2);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//route
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users')); 
// inicia server
app.listen(app.get('port'), () => {
    console.log("server on port ${app.get('port')}");
});