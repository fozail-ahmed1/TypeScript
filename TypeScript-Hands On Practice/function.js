function getSum(x, y, z) {
    console.log(x + y + z);
    return x + y + z;
}
getSum(1, 2, 3);
var getSum2 = function (x, y, z) {
    return x + y;
    var count = 2;
    if (typeof z !== 'undefined') {
        return x + y;
        count++;
    }
};
getSum2(1, 2);
//rest parameter
function getAverage() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        total += x[i];
        count++;
    }
    var result = total / count;
    return result;
}
