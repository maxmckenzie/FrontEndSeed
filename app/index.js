import logger from './logger';
import Twig from 'twig';
import express from 'express';
var app = express();

app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.set("twig options", {
    strict_variables: false
});

app.get('/', function(req, res){
  res.render('index.twig', {
    //templateVar : "Hello World"
  });
});

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
  logger.info(`Node app is running on http://localhost:${app.get('port')}`);
});