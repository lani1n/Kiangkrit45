// 1
/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/
const manIsMortal = true;
const SocratesIsMen = true;
const SocratesIsImmortal = false;

if (manIsMortal === true) {
    console.log("All men are mortal");
    if (SocratesIsMen === true) {
        console.log("Socrates is a man.");
        if (SocratesIsImmortal === false) {
            console.log("Therefore, socrates is mortal.");
        }
        else {
            console.log("Therefore, socrates is immortal.")
        }
    }
    else {
        console.log("Socrates is not a man.")
    }
}
else {
    console.log("All men are immortal")
}

// 2
/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/
const cakeIsVanilla = true;
const cakeIsChocolate = false;

if (cakeIsChocolate === true || cakeIsVanilla === true) {
    console.log("This cake is either vanilla or chocolate.")
    if (cakeIsChocolate === true) {
        console.log("This cake is chocolate.")
    }
    else {
        console.log("This cake is not chocolate.")
        if (cakeIsVanilla) {
            console.log("Therefore, this cake is vanilla.")
        }
    }
}
else {
    console.log("This cake is neither vanilla or chocolate.")
}