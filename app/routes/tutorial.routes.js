module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial with params
  router.get("/create1/title/:title/description/:description/published/:published", tutorials.createWithParams);


  // Retrieve all published Tutorials
  router.get("/create", tutorials.createWithParams);

  app.use('/api/tutorials', router);
};
