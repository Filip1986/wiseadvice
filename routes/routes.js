var User = require('../models/user');
var moment = require('moment');
var jwt = require('jwt-simple');
var config = require('../config');
var mongodb = require('mongodb');

var ContentHandler = require('./ContentHandler');
var AuthenticationHandler = require('./AuthenticationHandler');
var path = require('path');

module.exports = function (app, db) {
  console.log("routes index.js");

  var contentHandler = new ContentHandler(db, mongodb);
  var authenticationHandler = new AuthenticationHandler(db);


  /****************************************************************************************************
   ** SERVER ROUTES
   ** Here we have the server routes where we handle API calls, authentication routes, etc.
   ***************************************************************************************************** */


  app.post('/auth/login', authenticationHandler.login);
  app.post('/auth/signup', authenticationHandler.signup);

  /*MENU - API ROUTE*/
  app.get('/api/getMenu', contentHandler.getMenu);


  /*ARTA - API ROUTE*/
  app.get('/api/anunturi-romanesti', contentHandler.getAnunturi);
  app.get('/api/bancuri-animale', contentHandler.getBancuriAnimale);
  app.get('/api/bancuri-diverse', contentHandler.getBancuriDiverse);
  app.get('/api/culmi', contentHandler.getCulmi);
  app.get('/api/fabule', contentHandler.getFabule);
  app.get('/api/ghicitori', contentHandler.getGhicitori);
  app.get('/api/poezii', contentHandler.getPoezii);
  app.get('/api/povesti', contentHandler.getPovesti);


  /*LISTE - API ROUTE*/
  app.get('/api/carti-crestine', contentHandler.getCartiCrestine);
  app.get('/api/carti-interesante', contentHandler.getCartiInteresante);

  app.get('/api/top-desene', contentHandler.getDesene);
  app.get('/api/top-filme', contentHandler.getFilme);

  app.get('/api/aforisme', contentHandler.getAforisme);


  /*MEDIA - API ROUTE*/
  app.get('/api/gifs-cool', contentHandler.getCoolGifs);
  app.get('/api/gifs-fail', contentHandler.getFailGifs);
  app.get('/api/gifs-funny', contentHandler.getFunnyGifs);
  app.get('/api/gifs-interesting', contentHandler.getInterestingGifs);
  app.get('/api/gifs-wow', contentHandler.getWowGifs);
  app.get('/api/gifs-reaction', contentHandler.getReactionGifs);

  app.get('/api/music', contentHandler.getMusic);
  app.get('/api/poze', contentHandler.getPoze);

  app.get('/api/cuvinte', contentHandler.getCuvinte);

  /*SUFLET & MINTE - API ROUTE*/
  app.get('/api/facts', contentHandler.getFacts);

  app.get('/api/abraham-lincoln', contentHandler.getCitateAbrahamLincoln);
  app.get('/api/albert-einstein', contentHandler.getCitateAlbertEinstein);
  app.get('/api/aristotel', contentHandler.getCitateAristotel);
  app.get('/api/benjamin-franklin', contentHandler.getCitateBenjaminFranklin);
  app.get('/api/buddha', contentHandler.getCitateBuddha);
  app.get('/api/charles-dickens', contentHandler.getCitateCharlesDickens);
  app.get('/api/confucius', contentHandler.getCitateConfucius);
  app.get('/api/dalai-lama', contentHandler.getCitateDalaiLama);
  app.get('/api/democrit', contentHandler.getCitateDemocrit);
  app.get('/api/euripide', contentHandler.getCitateEuripide);
  app.get('/api/george-bernard-shaw', contentHandler.getCitateGeorgeBernardShaw);
  app.get('/api/george-washington', contentHandler.getCitateGeorgeWashington);
  app.get('/api/immanuel-kant', contentHandler.getCitateImmanuelKant);
  app.get('/api/lao-tzu', contentHandler.getCitateLaoTzu);
  app.get('/api/lucius-annaeus-seneca', contentHandler.getCitateLuciusAnnaeusSeneca);
  app.get('/api/mahatma-gandhi', contentHandler.getCitateMahatmaGandhi);
  app.get('/api/maica-tereza', contentHandler.getCitateMaicaTereza);
  app.get('/api/mark-twain', contentHandler.getCitateMarkTwain);
  app.get('/api/martin-luther-king-jr', contentHandler.getCitateMartinLutherKingJr);
  app.get('/api/napoleon-bonaparte', contentHandler.getCitateNapoleonBonaparte);
  app.get('/api/neale-donald-walsh', contentHandler.getCitateNealeDonaldWalsh);
  app.get('/api/oscar-wilde', contentHandler.getCitateOscarWilde);
  app.get('/api/pablo-picasso', contentHandler.getCitatePabloPicasso);
  app.get('/api/platon', contentHandler.getCitatePlaton);
  app.get('/api/publilius-syrus', contentHandler.getCitatePubliliusSyrus);
  app.get('/api/ralph-waldo-emerson', contentHandler.getCitateRalphWaldoEmerson);
  app.get('/api/richard-wurmbrand', contentHandler.getCitateRichardWurmbrand);
  app.get('/api/sfantul-augustin', contentHandler.getCitateSfantulAugustin);
  app.get('/api/sfantul-ciprian', contentHandler.getCitateSfantulCiprian);
  app.get('/api/sfantul-ioan-gura-de-aur', contentHandler.getCitateSfantulIoanGuraDeAur);
  app.get('/api/sfantul-ioan-scararul', contentHandler.getCitateSfantulIoanScararul);
  app.get('/api/sfantul-irineu', contentHandler.getCitateSfantulIrineu);
  app.get('/api/sfantul-petru', contentHandler.getCitateSfantulPetru);
  app.get('/api/sfantul-simeon-noul-teolog', contentHandler.getCitateSfantulSimeonNoulTeolog);
  app.get('/api/sfantul-vasile-cel-mare', contentHandler.getCitateSfantulVasileCelMare);
  app.get('/api/socrates', contentHandler.getCitateSocrates);
  app.get('/api/steven-wright', contentHandler.getCitateStevenWright);
  app.get('/api/sun-tzu', contentHandler.getCitateSunTzu);
  app.get('/api/thomas-jefferson', contentHandler.getCitateThomasJefferson);
  app.get('/api/william-shakespeare', contentHandler.getCitateWilliamShakespeare);
  app.get('/api/winston-churchill', contentHandler.getCitateWinstonChurchill);
  app.get('/api/alte-citate', contentHandler.getCitateAlteCitate);


  /*ADD LIKES*/
  app.put('/api/addLike', contentHandler.addLike);

  //app.use('/api',authenticationHandler.ensureAuthenticated)
  app.get('/api/me', contentHandler.myProfile)

  /****************** EXPLICATIE ***************
   http://stackoverflow.com/questions/31820067/angular-ui-router-pressing-refresh-causes-404-error
   */


  /*
   |--------------------------------------------------------------------------
   | Login Required Middleware
   |--------------------------------------------------------------------------
   */
  function ensureAuthenticated(req, res, next) {
    console.log("req.headers", req.headers)
    if (!req.headers.authorization) {
      return res.status(401).send({
                                    message: 'Please make sure your request has an Authorization header'
                                  });
    }
    var token = req.headers.authorization.split(' ')[1];
    console.log("token", token)

    var payload = null;
    try {
      payload = jwt.decode(token, config.TOKEN_SECRET);
      console.log("payload", payload)
    }
    catch (err) {
      return res.status(401).send({
                                    message: err.message
                                  });
    }

    if (payload.exp <= moment().unix()) {
      return res.status(401).send({
                                    message: 'Token has expired'
                                  });
    }
    req.user = payload.sub;
    next();
  }

  /*
   |--------------------------------------------------------------------------
   | Generate JSON Web Token
   |--------------------------------------------------------------------------
   */
  function createJWT(user) {
    var payload = {
      sub: user._id,
      iat: moment().unix(),
      exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
  }

  /*
   |--------------------------------------------------------------------------
   | GET /api/me
   |--------------------------------------------------------------------------
   */
  app.get('/api/me', ensureAuthenticated, function (req, res) {
    User.findById(req.user, function (err, user) {
      res.send(user);
    });
  });

  /*
   |--------------------------------------------------------------------------
   | PUT /api/me
   |--------------------------------------------------------------------------
   */
  app.put('/api/me', ensureAuthenticated, function (req, res) {
    User.findById(req.user, function (err, user) {
      if (!user) {
        return res.status(400).send({
                                      message: 'User not found'
                                    });
      }
      user.displayName = req.body.displayName || user.displayName;
      user.email = req.body.email || user.email;
      user.save(function (err) {
        res.status(200).end();
      });
    });
  });


  /*
   |--------------------------------------------------------------------------
   | Log in with Email
   |--------------------------------------------------------------------------
   */
  app.post('/auth/login', function (req, res) {
    User.findOne({
                   email: req.body.email
                 }, "+password", function (err, user) {
      console.log("err", err)
      console.log("user", user)
      if (!user) {
        console.log("!user")
        return res.status(401).send({
                                      message: 'Wrong email and/or password'
                                    });
      }

      user.comparePassword(req.body.password, function (err, isMatch) {
        if (!isMatch) {
          return res.status(401).send({
                                        message: 'Wrong email and/or password'
                                      });
        }
        console.log("password matc")
        res.send({
                   token: createJWT(user)
                 });
      });
    });
  });

  /*
   |--------------------------------------------------------------------------
   | Create Email and Password Account
   |--------------------------------------------------------------------------
   */
  app.post('/auth/signup', function (req, res) {
    console.log("signup", User)
    console.log("req.body.email", req.body.password)
    User.findOne({
                   email: req.body.email
                 }, function (err, existingUser) {
      if (existingUser) {
        return res.status(409).send({
                                      message: 'Email is already taken'
                                    });
      }
      var user = new User({
                            displayName: req.body.displayName,
                            email: req.body.email,
                            password: req.body.password
                          });
      user.save(function () {
        res.send({
                   token: createJWT(user)
                 });
      });
    });
  });


  // API route to insert a new entry.
  app.post('/api/PostNewEntry', function (req, res, next) {

    var doc = req.body;

    posts.insert(doc, function (err, inserted) {
      if (err) {
        console.log(err.message);
        return db.close();
      }
      res.json(inserted);
      console.dir("Successfully inserted: " + JSON.stringify(inserted));
      //JSON.stringify is to actually get the json representation of this JavaScript object.

    });
  });


  // API route to delete a new entry.
  app.put('/api/deletePost', function (req, res, next) {

    console.log("req.body: ", req.body._id)
    var id = req.body._id;

    posts.remove({_id: new mongodb.ObjectID(id)}, function (err, removed) {
      if (err) {
        console.log("Error processing request. Cannot find user with this id.");
      }
      //console.log("User has been found. Processing request ...");
      console.log("deleted", removed)
      res.json(removed)
    });
  });

  // API route to edit a new entry.
  app.put('/api/editPost', function (req, res, next) {

    console.log("req.body: ", req.body.obj)

    console.log('id: ' + req.body.obj.entryId)

    posts.update({_id: new mongodb.ObjectID(req.body.obj.entryId)}, {
      $set: {
        cuvant: req.body.obj.doc.cuvant,
        definitia: req.body.obj.doc.definitia,
        categoria: req.body.obj.doc.categoria
      }
    }, function (err, objectFound) {
      if (err) {
        console.log("Error processing request. Cannot find user with this id.");
      }
      //console.log("User has been found. Processing request ...");
      console.log("objectFound", objectFound)
      res.json(objectFound)
    });
  });


  /****************************************************************************************************
   ** FRONTEND ROUTES
   ** This route will handle all Angular requests.
   ** Here we are saying: "whatever the request route is, send the ./public/index.html file"
   ** And from inside this index.html file Angular will take over.
   ***************************************************************************************************** */
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // Load our 'public/index.html' file.
  });

  app.use(function (req, res) {
    res.status(404).end('error');
  });

};
