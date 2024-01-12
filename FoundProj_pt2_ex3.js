const randomNum = Math.random();
const range = 33 - 3 + 1;

// Q1a: We added 1 to the difference of 33 and 3 to makesiure both endpoints of range are included. 

const rangeNum = randomNum * range; 

// Q2a: Multiplying randomDecimal by range helps us get a number within the range becuase it multiplied a number between 0 and 1 to the range, which will always be equal to or less than the range. 

randomInt = Math.floor(rangeNum);

// Q3a: We used math.floor() instead of math.round() because math.round() can round up or down depending on the number it's closer to, while math.floor() always rounds down. 

const shiftValue = randomInt + 3; 

// Q4a: since Random int returns a number between 1 - 30, we add 3 so that is it within the range 3 - 33. 