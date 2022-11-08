class Employee {
    constructor(empName, ID_number) {
        this._empName = empName;
        this._ID_number = ID_number;
    }

        get_empName() {
            return this.empName;
        }
        get_ID_number() {
            return this.ID_number;
        }

}
class ProductionWorker extends Employee {
    constructor(empName, ID_number, shift_number, hourly_rate) {
        super(empName, ID_number);
        this._shift_number = shift_number;
        this._hourly_rate = hourly_rate;
    }

    get_shift_number(){
        if (shift_number == 1);{
            return "Day shift"
        }
        elseif (shift_number == 2); {
            return "Night shift"
        }
    }
    get_hourly_rate() {
        return this.hourly_rate;
    }
} 
function prodWorker() {
    empName = document.getElementByID("empName").value;
    ID_number = document.getElementByID("ID_number").value;
    shift_number = document.getElementByID("shift_number").value;
    hourly_rate = document.getElementByID("hourly_rate").value;

    let worker = new ProductionWorker(empName, ID_number, shift_number, hourly_rate)

    document.getElementByID("empOutput").innerHTML = worker.get_empName;
    document.getElementByID("IDOutput").innerHTML = worker.get_ID_number;
    document.getElementByID("shiftOutput").innerHTML = worker.get_shift_number;
    document.getElementByID("rateOutput").innerHTML = worker.get_hourly_rate;
}
