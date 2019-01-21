var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
var fs = require( 'fs' );
var shell = require( 'shelljs' );

var app = express();
app.set( 'view engine', 'ejs');
app.set( 'views', path.join( __dirname, 'views' ) );


app.get( '/', function( req, res ) {
  res.render('index', { 'hello': 'world' } );
});

app.listen( 3000, function() {
  let url = "http://localhost:3000/";
  console.log( "Server started:\n" + url );
  shell.exec( "open " + url, {async:true} );
});
