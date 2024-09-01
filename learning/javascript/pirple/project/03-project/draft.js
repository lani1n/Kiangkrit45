const UP = 1;
const DOWN = -1;
const SECOND = 1000;

class Elevator {
    constructor(name, minFloor, maxFloor) {
        this.name = name;
        this.minFloor = minFloor;
        this.maxFloor = maxFloor;
        this.currentFloor = 0;
        this.moveDirection = UP;
        this.doorsOpen = true;
        this.emergencyStopped = false;
        this.isMoving = false;
        this.originFloor = null;
        this.targetFloor = null;
    }
    moveTo(origin, target) {
        this.originFloor = origin;
        this.targetFloor = target;
        this.isMoving = true;
        this.closeDoors();
        this.checkDirection();
        this.moveOneFloor();
    }
    canMoveTo(target) {
        return (
            this.minFloor <= target &&
            this.maxFloor >= target &&
            !this.isMoving &&
            !this.emergencyStopped
        );
    }
    getTarget() {
        this.checkDirection();
        this.checkCurrentFloor();
        if (this.originFloor !== null) return this.originFloor;
        else if (this.targetFloor !== null) return this.targetFloor;
        else return false;
    }
    checkDirection() {
        // if (this.originFloor === null) return;
        // const floorDiff = this.targetFloor - this.originFloor;
        // this.moveDirection = (Math.sign(floorDiff) === 1) ? UP : DOWN;
        if (this.originFloor !== null) {
            this.direction = (this.originFloor >= this.currentFloor) ? UP : DOWN;
        } else if (this.destinationFloor !== null) {
            this.direction = (this.destinationFloor >= this.currentFloor) ? UP : DOWN;
        } else {
            this.direction = UP;
        }
    }
    checkCurrentFloor() {
        if (this.originFloor === this.currentFloor) {
            this.originFloor = null;
            this.openDoors();
        }
        if (this.originFloor === null && this.targetFloor === this.currentFloor) {
            this.targetFloor = null;
        }
    }
    moveOneFloor() {
        this.closeDoors();
        setTimeout(() => {
            let target = this.getTarget();
            this.currentFloor += this.moveDirection;
            if (target === false) return;
            if (target != this.currentFloor) this.moveOneFloor();
            else this.checkIfArrived();
        }, SECOND);
    }
    checkIfArrived() {
        console.log(`${this.name} move to ${this.currentFloor}`);
        if (this.getTarget() === false) this.arrived();
        else {
            this.originFloor = null;
            this.moveOneFloor();
        }
    }
    arrived() {
        this.isMoving = false;
        this.openDoors();
    }
    openDoors() {
        if (this.doorsOpen) return;
        this.doorsOpen = true;
        console.log(`${this.name} open doors`)
    }
    closeDoors() {
        if (this.doorsOpen) return;
        this.doorsOpen = false;
        console.log(`${this.name} close doors`)
    }
    emergencyButton() {
        this.isMoving = false;
        this.emergencyStopped = true;
        this.originFloor = null;
        this.targetFloor = null;
        this.openDoors();
    }
    emergencyReset() { this.emergencyStopped = false; }
}
const elevatorA = new Elevator("A", -1, 9);
const elevatorB = new Elevator("B", 0, 10);

class Building {
    constructor(min = -1, max = 10) {
        this.floors = [];
        this.twoElevators = [];
        this.buildingFloors(min, max);
    }
    buildingFloors(min, max) {
        if (min > max) {
            let tempMin = min;
            min = max;
            max = tempMin;
        }
        for (let i = min; i <= max; i++) {
            this.floors.push(i);
            // this.floors = [...this.floors, i];
        }
    }
    installElevator(elevator) {
        this.twoElevators.push(elevator);
        // this.twoElevators = [...this.twoElevators, elevator];
    }
    callElevator(origin, target) {
        console.log(`Call elevator to travel from #${origin} to #${target}`);
        let elevator = this.nearElevator(origin, target);
        // console.log(`${elevator.name} is on floor ${elevator.currentFloor}`);
        elevator.moveTo(origin, target);
    }
    nearElevator(origin, target) {
        let floorDifference = this.floors.length;
        let selectedElevator = null;
        this.twoElevators.forEach(elevator => {
            if (!elevator.canMoveTo(target)) return;
            let elevatorDiff = Math.abs(elevator.currentFloor - origin);
            if (elevatorDiff < floorDifference) {
                floorDifference = elevatorDiff;
                selectedElevator = elevator;
            }
        });
        return selectedElevator;
    }
    getElevatorsStatus() {
        this.twoElevators.forEach(elevator => {
            console.log(`Elevator ${elevator.name} is on floor ${elevator.currentFloor}`);
        });
    }
}
const building = new Building(-1, 10);
building.installElevator(elevatorA);
building.installElevator(elevatorB);
console.log(building.floors);
building.getElevatorsStatus();

setTimeout(() => { building.callElevator(9, -1); }, 10 * SECOND); // only elevator A
setTimeout(() => { building.callElevator(7, 10); }, 40 * SECOND); // only elevator B
setTimeout(() => { building.callElevator(0, 7); }, 30 * SECOND);
setTimeout(() => { building.callElevator(2, 9); }, 50 * SECOND);
setTimeout(() => { building.callElevator(1, 3); }, 70 * SECOND);

// check final elevator's floors
setTimeout(() => { building.getElevatorsStatus(); }, 80 * SECOND);