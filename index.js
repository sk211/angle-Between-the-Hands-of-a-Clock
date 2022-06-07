//  all clock 360 degrees
// one hour  360/12 = 30 degrees
// a minits move minits hand 360/60 = 6 degrees
// hour hande move 30 / 60 =.5 degrees every minits 
// The Math.abs() function returns the absolute value of a number

function angleClock(hour, minutes) {
    const minuteAngle = minutes * 6;
    const hourAngle = (hour * 30) + (minutes * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}

console.log(angleClock(3, 00))
console.log(angleClock(2, 55))


