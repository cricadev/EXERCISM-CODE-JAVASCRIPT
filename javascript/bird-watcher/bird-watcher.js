// @ts-check
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let number = 0;
  for(let i = 0; i < birdsPerDay.length; i++) {
      number += birdsPerDay[i]
  }
  return number;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  if(week >= 2){
    const initialWeek = (week *  7) -7;
    week = (week *  7);
    const birdsWeek = birdsPerDay.slice(initialWeek,week);
    let number = 0;
    for(let i = 0; i < birdsWeek.length; i++) {
    
        number += birdsWeek[i]
  
    }
  return number;
  }
  else{
    week = 1;
    let number = 0;
    for(let i = 0; i < 7; i++) {
        number += birdsPerDay[i]
    }
    return number;
  }
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) { 
  for(let i = 0; i < birdsPerDay.length; i+=2){
    birdsPerDay[i] +=1
  }
  return birdsPerDay;

}
