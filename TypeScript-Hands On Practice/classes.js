var Car = /** @class */ (function () {
    function Car(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    Car.prototype.years = function () {
        console.log(this.year);
    };
    return Car;
}());
var car = new Car('Cadillac', '2X', 'red', '2001');
console.log(car.brand + '' + car.years);
