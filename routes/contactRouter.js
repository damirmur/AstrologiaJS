const express = require("express");
const contactController = require("../controllers/contactController.js");
const contactRouter = express.Router();
 
contactRouter.get("/", contactController.index);
 
module.exports = contactRouter;
