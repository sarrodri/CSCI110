class Employee {
    constructor(name, ID_number) {
        this._name = name;
        this._ID_number = ID_number;
    }
}
class ProductionWorker extends Employee {
    constructor(shift_number, hourly_rate) {
        this._shift_number = shift_number
        this._hourly_rate = hourly_rate
    }
}
