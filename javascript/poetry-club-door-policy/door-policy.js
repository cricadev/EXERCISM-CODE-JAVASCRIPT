// @ts-check
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
    const wordArr = word.split("");
    let arr = [];
    arr.unshift(wordArr[0])
    for(let i = 1; i < wordArr.length; i++){
        
         arr.push(wordArr[i].toLowerCase());
    }
   console.log(arr);
    return arr.join("");
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
    let arr = Array.from(line);
    let newArr = [];
    arr.map((a) => {
       newArr.push(Array.from(a.trim()).reverse()[0]);
    })
    let word = String(newArr.reverse().join("")[0].toLowerCase());
    console.log(word);
    return word;

}



/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  const wordArr = word.split("");
  let arr = [];
  arr.unshift(wordArr[0].toUpperCase())
  for(let i = 1; i < wordArr.length; i++){
      
       arr.push(wordArr[i].toLowerCase());
  }
 console.log(arr);
  return arr.join("").concat(", please");

}

