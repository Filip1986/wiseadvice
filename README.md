# Angular4List

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## MongoDB
Create Dump
Go to mongodb bin and double click mongodump -> it will create dumps of all your databases in a folder called dump.

Restore a collection
mongorestore.exe –collection col_name –db db_name patth/to/file/file.bson


## What is in Server.js
var express  = require('express'); // Express is a library for NodeJS which handles for us a lot of routing and a lot of details of a web application.

var app            = express(); // We create an instance of our app;

var MongoClient    = require('mongodb').MongoClient; //This is the MongoDB Driver for NodeJS. It is a (JavaScript) library(module) that will handle the (BSON) protocol . We will use this driver's API to actually connect to MongoDB. This driver will do the communication with the database, the opening sockets, reading documents, detecting the errors, it will handle a lot of the things behind the scene so that we don't have to deal with them in our application code.
//** MongoClient - From the module 'mongodb' we get the MongoClient object. This object is our interface into the 'mongodb' driver library. Through this MongoClient object we will access the API methods to the driver wich will then handle whatever operation we requested.


//Variables (in seconds) for caching static resources;
var oneDay = 86400000;
var sevenDay = 604800000;


var port = process.env.PORT || 8083; // We set the port on which our application will run.


/* get all data/stuff of the body (POST) parameters*/
// parse application/json ;
app.use(bodyParser.json());


// compress all requests
app.use(compression());


// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));


//routes(app,db);
// We pass our application to our routes;
require('./routes/routes.js')(app, db); // load our routes and pass in our app and fully configured passport
//require('./routes.js')(app, db); // load our routes and pass in our app and fully configured passport







/********************************************
*************** Documentation ***************
********************************************* */

//*********** Database Connection ***********

// MongoClient.connect('mongodb://localhost:27017/NMAstarterkit', function (err, db) { ...

// We connect to the Mongo Server and to our local database (in this case our db name is 'NMAstarterkit' - NodeMongoAngularStarterKit);
// This will open the connection to the Server. Instead of checking the return value, we pass a callback function (function (err, db));
// The first parameter in the callback function is to take the errors, and the second parameter is for the returned values.
// The driver connects to the 'mongod' instance and it will call the callback function after it connects;
// Because we dont check the return values, we need a way for the driver to tell us what happened and give us the results of this connection attempt;
// If there is an error, the parameter 'err' will get populated.
// If the connection is succesful, the driver will call this callback that we passed in with the connected database object;
// The second argument 'db' is like a handle for our database connection.
// From now on, in this function (this callback)  we can use this database object ('db') to perform operations using this allready connected client.
