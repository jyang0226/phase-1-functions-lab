// Code your solution in this file!
//let hq = 42 (hq is on st 42)
//let st = 264 (each street is 264ft)
// blTr (Blocks Travelled)
// d (distance)


let hq = 42;
const st = 264;
let d = distance;

function distanceFromHqInBlocks(b) {
    return Math.abs(hq - b);
}

function distanceFromHqInFeet(b) {
    return distanceFromHqInBlocks(b) * st;
  }

function distanceTravelledInFeet(start, finish) {
   const blTr = Math.abs(finish - start);
    return blTr * 264;
}

function calculatesFarePrice(start, finish) {
    const d = distanceTravelledInFeet(start, finish);
    let fare;
    if (d <= 400) {
        fare = 0;
    } else if (400 < d && d <= 2000) {
        fare = (d - 400) * 0.02;
    } else if (2000 < d && d <= 2500) {
        fare = 25;
        } else {
            return "cannot travel that far"
        }
    return fare;
}