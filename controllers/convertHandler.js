function ConvertHandler() {

  const getNumber = (input) => {
    let number = input.match(/[.\d\/]+/g) || ["1"];
    return number
  }
  const getString = (input) => {
    let string = input.match(/[a-zA-Z]+/g)[0].toLowerCase();
    return string;
  }

  const unitArray = ["gal", "l", "mi", "km", "lbs", "kg"]
  const validString = (input) => {
    let string = getString(input)
    if (unitArray.includes(string)) {
      return true;
    } else {
      return false;
    }
    }
  

  const checkDiv = (input) => {
    let array = input.split("/");
    if (array.length > 2) {
      return false;
    } else {
      return array;
    }
  }
  
  this.getNum = function(input) {
    let result;
    if (checkDiv(input) === false) {
      result = "Invalid number"
    } else if(checkDiv(input).length === 2){
      result = parseFloat(getNumber(checkDiv(input)[0]) / getNumber(checkDiv(input)[1]))
    } else {
      result = parseFloat(getNumber(input))
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    if (validString(input) === false) {
      result = "Invalid unit"
    } else {
      if (getString(input) === "l"){
        return "L"
      } else {
        result = getString(input);
      }
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    result = (initUnit === "gal" ? "L" : initUnit === "L" ? "gal" : initUnit === "mi" ?
      "km" : initUnit === "km" ? "mi" : initUnit === "lbs" ? "kg" : "lbs");
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    result = unit === "gal" ? "gallons" : unit === "L" ? "liters" : unit === "mi" ? "miles"
      : unit === "km" ? "kilometers" : unit === "lbs" ? "pounds" : unit === "kg" ? "kilograms"
      : "invalid unit";
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if (initUnit === "gal"){
      result = (initNum * galToL).toFixed(5);
    } else if (initUnit === "L") {
      result = (initNum / galToL).toFixed(5);
    } else if (initUnit === "mi") {
      result = (initNum * miToKm).toFixed(5);
    } else if (initUnit === "km") {
      result = (initNum / miToKm).toFixed(5);
    } else if (initUnit === "lbs") {
      result = (initNum * lbsToKg).toFixed(5);
    } else if (initUnit === "kg") {
      result = (initNum / lbsToKg).toFixed(5);
    }
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
