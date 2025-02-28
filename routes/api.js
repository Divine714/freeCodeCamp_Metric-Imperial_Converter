'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    if (initNum === "Invalid number" && initUnit === "Invalid unit") {
      res.json("invalid number and unit");
    };
    if (initNum === "Invalid number") {
      res.json("invalid number");
    };
    if (initUnit === "Invalid unit"){
      res.json("invalid unit");
    };
    
    res.json({ initNum, initUnit, returnNum, returnUnit, string });
  })

};
