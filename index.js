function distanceFromHqInBlocks (pickUpLocation) {
return Math.abs(pickUpLocation - 42)  ;
} //Math.abs => function used to get the absolute value of a number. Absolute value of a number is distance from zero on number line. Useful for calculating distance.

const distanceFromHqInFeet = function(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264
};
  // arrow function   
const distanceTravelledInFeet = (pickUpLocation, destination) => {
    return Math.abs(pickUpLocation - destination) * 264;
}

function calculatesFarePrice(pickUpLocation, destination) {
    const feetTravelled = distanceTravelledInFeet(pickUpLocation, destination)
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}