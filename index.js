// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location > 42){
       return location - 42;
    }
    else if (location <= 42){
        return 42 - location;
    }
}
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(38));

//distanceFromHqInFeet()
function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start, stop){
    if (stop > start){
        return (stop - start)*264
    }
    else if (start > stop){
        return (start-stop)*264
    }

}
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, stop){
    let distance = distanceTravelledInFeet(start, stop)
    if (distance <= 400){
        return 0;
    }
    else if (distance >= 400 && distance <= 2000){
        //(not including 400, which are free!)
        return (distance-400)* 0.02;
    }
    else if (distance > 2000 && distance <=2500){
        return 25;
    }
    else if (distance > 2500){
        return "cannot travel that far";
    }
}


