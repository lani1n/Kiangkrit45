class Vehicle {
    constructor(Make, Model, Year, Weight) {
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
        this.Weight = Weight;
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }
    maintainance() {
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }
    Repair() {
        this.maintainance();
    }
    displayInfo() {
        const details =
`
Make: ${this.Make}
Model: ${this.Model}
Year: ${this.Year}
Weight: ${this.Weight}
Need maintenance: ${this.NeedsMaintenance}
Trips since last maintenance: ${this.TripsSinceMaintenance}`
        console.log(details);
    }
}

class Cars extends Vehicle {
    constructor(Make, Model, Year, Weight) {
        super(Make, Model, Year, Weight);
    }
    Drive() {
        this.isDriving = true;
    }
    Stop() {
        this.isDriving = false;
        this.TripsSinceMaintenance += 1;
        if (this.TripsSinceMaintenance === 100) this.NeedsMaintenance = true;
    }
}

const McLaren = new Cars("McLaren", "720S", 2017, 1419);
const Noble = new Cars("Noble", "M600", 2011, 1250);
const Ferrari = new Cars("Ferrari", "SF90", 2019, 1600);

for (let i = 0; i < 13; i++) {
    McLaren.Drive();
    McLaren.Stop();
}
for (let i = 0; i < 69; i++) {
    Noble.Drive();
    Noble.Stop();
}
for (let i = 0; i < 112; i++) {
    Ferrari.Drive();
    Ferrari.Stop();
}

McLaren.displayInfo();
Noble.displayInfo();
Ferrari.displayInfo();

// Planes

class Planes extends Vehicle {
    constructor(Make, Model, Year, Weight) {
        super(Make, Model, Year, Weight);
    }
    Flying() {
        this.isFlying = true;
        if (this.NeedsMaintenance) {
            console.log("The plane can't fly until it's repaired");
            return false;
        }
    }
    Landing() {
        if (this.isFlying === false) return false;
        this.isFlying = false;
        this.TripsSinceMaintenance += 1;
        if (this.TripsSinceMaintenance === 100) this.NeedsMaintenance = true;
    }
}

const Airbus = new Planes('Airbus', 'A350', 2013, 45000);
const Boeing = new Planes('Boeing', '787', 2009, 60000);

for (let i = 0; i < 45; i++) {
    Airbus.Flying();
    Airbus.Landing();
}
for (let i = 0; i < 102; i++) {
    Boeing.Flying();
    Boeing.Landing();
}

Airbus.displayInfo();
Boeing.displayInfo();