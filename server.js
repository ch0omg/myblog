const express = require('express');
const app = express();
const fs = require('fs');
const router = require('./router/main')(app,fs);

app.set('veiws', __dirname +'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.listen(3000, ()=> console.log('server is running....'))
