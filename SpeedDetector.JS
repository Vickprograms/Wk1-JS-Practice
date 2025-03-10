function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        return ("Ok");
    }

let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > 12) {
        return("License suspended");
    } else {
        return(`Points: ${demeritPoints}`);
    }
}

