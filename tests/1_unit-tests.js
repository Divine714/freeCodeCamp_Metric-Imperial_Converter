const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("Read whole number", (done) => {
        assert.equal(convertHandler.getNum("2kg"), 2);
        done();
    });

    test("Read decimal", (done) => {
        assert.equal(convertHandler.getNum("2.2kg"), 2.2);
        done();
    });

    test("Read fraction", (done) => {
        assert.equal(convertHandler.getNum("2/2kg"), 1);
        done();
    });

    test("Read deciman with fraction", (done) => {
        assert.equal(convertHandler.getNum("2.2/2kg"), 1.1);
        done();
    });

    test("Double fraction error", (done) => {
        assert.equal(convertHandler.getNum("2/2/2kg"), "Invalid number");
        done();
    });

    test("Default input of 1", (done) => {
        assert.equal(convertHandler.getNum("kg"), 1);
        done();
    });

    test("Read valid unit", (done) => {
        assert.equal(convertHandler.getUnit("2kg"), "kg");
        done();
    });

    test("Error if invalid unit", (done) => {
        assert.equal(convertHandler.getUnit("2p"), "Invalid unit");
        done();
    });

    test("Valid return unit", (done) => {
        assert.equal(convertHandler.getReturnUnit("2kg"), "lbs");
        done();
    });

    test("Spell out unit name", (done) => {
        assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
        done();
    });

    test("gal to L", (done) => {
        assert.equal(convertHandler.convert(3, "gal"), 11.35623);
        done();
    });

    test("L to gal", (done) => {
        assert.equal(convertHandler.convert(3, "L"),  0.79252);
        done();
    });

    test("mi to km", (done) => {
        assert.equal(convertHandler.convert(3, "mi"), 4.82802);
        done();
    });

    test("km to mi", (done) => {
        assert.equal(convertHandler.convert(3, "km"), 1.86412);
        done();
    });

    test("lbs to kg", (done) => {
        assert.equal(convertHandler.convert(3, "lbs"), 1.36078 );
        done();
    });

    test("kg to lbs", (done) => {
        assert.equal(convertHandler.convert(3, "kg"), 6.61387);
        done();
    });
});