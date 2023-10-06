function timeToMilli(days: number, hours: number, minutes: number, seconds: number): number {
  let daysInMilli = days * 24 * 60 * 60 * 1000;
  let hoursInMilli = hours * 60 * 60 * 1000;
  let minutesInMilli = minutes * 60 * 1000;
  let secondsInMilli = seconds * 1000;

  return daysInMilli + hoursInMilli + minutesInMilli + secondsInMilli;
}

console.log(timeToMilli(0, 0, 0, 10));