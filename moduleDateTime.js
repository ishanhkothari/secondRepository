var dateTime = require('node-datetime');
exports.myDateTime = function () {
    return Date();
};

exports.formattedDT = function () {
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
return formatted;
};