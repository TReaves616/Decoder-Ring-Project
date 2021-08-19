const polybiusModule = (function () {
  
  const table = {
    "a":"11", "b":"21", "c":"31", "d":"41", "e":"51",
    "f":"12", "g":"22", "h":"32", "i":"42", "j":"42", "k":"52", 
    "l":"13", "m":"23", "n":"33", "o":"43", "p":"53",
    "q":"14", "r":"24", "s":"34", "t":"44", "u":"54",
    "v":"15", "w":"25", "x":"35", "y":"45", "z":"55",
  }
  
  function polybius(input, encode = true) {
    let message = input.toLowerCase();
    let letter = "";
    let encodeOutput ="";
    const decodeOutput = [];
    
    if(encode){
      //BEGINNING ENCODE--------------------------
      for(let i = 0; i < message.length; i++) {
        //At this point, letter is just that: a letter (supposedly)
        letter = message[i]
        //If it is a letter, change it to its matching value
        if(letter.match(/[a-z]/i)) {
          letter = table[message[i]];
        }
        //Now, the letter is a string of a two digit number
        //If it wasn't a letter, the character will still be added
        encodeOutput += letter;
      }
      //Return the fully encoded string
      return encodeOutput;
      
    } else {
      //BEGINNING DECODE--------------------------
      //Remove all spaces from input to decode and find its length
      let testForOdd = input.replace(/ /g, "").length
      //If testForOdd is an odd number, return false.
      if(testForOdd % 2 === 1){return false}      
      
      //Make an array where each element contains a "word" to decode
      let intoWords = message.split(" ");
      
      //Loop through each "word" in the array
      for(let i = 0; i < intoWords.length; i++) {
        //string variable for the word being decoded
        let theWord = "";
        //Break the "word" down into an array where each element is a two-digit number.
        let brokenWord = intoWords[i].toString().match(/.{2}/g);
        //Loop through each element in the brokenWord array.
        for(let j = 0; j < brokenWord.length; j++){
          //Decipher what letter matches the two-digit number.
          letter = Object.keys(table).find((key) => table[key] === brokenWord[j]);
          //If the letter is 'i' or 'j', change it to "(i/j)"
          if(letter === 'i' || letter === 'j') {
              letter = '(i/j)';
          }
          //Add the decoded letter to the current word
          theWord += letter;
        }
        //Push the decoded word into the output
        decodeOutput.push(theWord);
      }
      //Return the output with a space in between each word.
      return decodeOutput.join(' ');
    }
  }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
