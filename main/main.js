var print = require('./buildLcdDigits.js');
var fixture = require('../test/fixture.js');

function printLcd(inputs) {
    var inputs = print.buildInputs(inputs);

    var allLcds = fixture.loadAllLcds();
    var lcds = print.buildLcd(inputs, allLcds);

    var lcdText = print.buildLcdText(lcds);

    console.log(lcdText);
}

exports.printLcd = printLcd;