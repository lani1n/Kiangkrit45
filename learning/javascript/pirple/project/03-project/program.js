const SECOND = 1000;
const UP = 1;
const DOWN = -1;
class Elevator {
    constructor(name, minFloor, maxFloor) {
        this.name = name;
        this.minFloor = minFloor;
        this.maxFloor = maxFloor;
        this.currentFloor = 0;
        this.direction = UP;
        this.doorsOpen = true;
        this.emergencyStopped = false;
        this.isMoving = false;
        this.originFloor = null;
        this.targetFloor = null;
    }
    moveToFloor(origin, target) {
        this.originFloor = origin;
        this.targetFloor = target;
        this.isMoving = true;
        this.closeDoors();
        this.checkDirection();
        this.moveOneFloor();
    }
    canMoveToFloor(target) {
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
        if (this.originFloor !== null) {
            this.direction = (this.originFloor >= this.currentFloor) ? UP : DOWN;
        } else if (this.targetFloor !== null) {
            this.direction = (this.targetFloor >= this.currentFloor) ? UP : DOWN;
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
            if (target === false) return;
            this.currentFloor += this.direction;
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
        console.log(`${this.name} open doors`);
    }
    closeDoors() {
        if (!this.doorsOpen) return;
        this.doorsOpen = false;
        console.log(`${this.name} close doors`);
    }
    emergencyStop() {
        this.openDoors();
        this.emergencyStopped = true;
        this.isMoving = false;
        this.originFloor = null;
        this.targetFloor = null;
    }
    resetEmergency() {
        this.emergencyStopped = false;
    }
}
class Building {
    constructor(min = -1, max = 10) {
        this.buildingFloors = [];
        this.buildingElevators = [];
        this.prepareBuildingFloors(min, max);
    }
    prepareBuildingFloors(min, max) {
        if (min > max) {
            let tempMin = min;
            min = max;
            max = tempMin;
        }
        for (let i = min; i <= max; i++) this.buildingFloors = [...this.buildingFloors, i];
    }
    installElevator(elevator) {
        this.buildingElevators = [...this.buildingElevators, elevator];
    }
    callElevator(origin, target) {
        console.log(`\n~ Call elevator to travel from #${origin} to #${target}`);
        let elevator = this.nearElevator(origin, target);
        console.log(`${elevator.name} is on floor ${elevator.currentFloor}`);
        elevator.moveToFloor(origin, target);
    }
    nearElevator(origin, target) {
        let floorDiff = this.buildingFloors.length;
        let selectedElevator = null;
        this.buildingElevators.forEach(elevator => {
            if (!elevator.canMoveToFloor(target)) return;
            let elevatorDiff = Math.abs(elevator.currentFloor - origin);
            if (elevatorDiff < floorDiff) {
                floorDiff = elevatorDiff;
                selectedElevator = elevator;
        }});
        return selectedElevator;
    }
    elevatorStatus() {
        this.buildingElevators.forEach(elevator => {
            console.log(`\t# Elevator ${elevator.name} is at floor ${elevator.currentFloor}`);
        });
    }
}
const elevatorA = new Elevator('A', -1, 9);
const elevatorB = new Elevator('B', 0, 10);
const building = new Building(-1, 10);

building.installElevator(elevatorA);
building.installElevator(elevatorB);
console.log(building.buildingFloors);
building.elevatorStatus();

setTimeout(() => { building.callElevator(3, 0); },  0 * SECOND);
setTimeout(() => { building.callElevator(9, -1); }, 10 * SECOND);
setTimeout(() => { building.callElevator(7, 10); }, 40 * SECOND);
setTimeout(() => { building.callElevator(0, 7); }, 30 * SECOND);
setTimeout(() => { building.callElevator(2, 9); }, 50 * SECOND);
setTimeout(() => { building.callElevator(1, 3); }, 70 * SECOND);