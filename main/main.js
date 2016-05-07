function printLCD(inputs) {
    var inputs = buildInputs(inputs);

    var allLcds = loadAllLcds();
    var lcds = buildLcd(inputs, allLcds);

    var lcdText = buildLcdText(lcds);

    console.log(lcdText)
}

function buildInputs(inputs) {
    return  inputs.toString().split("");
}

function find(input, allLcds) {
    for (var i = 0; i < allLcds.length; i++) {
        var allLcd = allLcds[i];
        if (allLcd.num === input) {

            return allLcd.value;
        }
    }
}

function buildLcd(inputs, allLcds) {
    var lcds = [];

    inputs.forEach(function (input) {
        var lcd = find(input, allLcds);
        lcds.push({value: lcd});
    });

    return lcds;
}

function buildLcdText(lcds) {
    var lcdText = '';

    for (var i = 0; i < 3; i++) {
        lcds.forEach(function (lcd) {
            lcdText += lcd.value[i] + ' ';
        });
        lcdText += '\n';
    }

    return lcdText;
}