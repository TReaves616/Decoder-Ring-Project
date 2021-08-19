const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    //Check to make sure that the alphabet parameter is valid
    //Was an alphabet parameter passed through?
    if (!alphabet) { return false }
    
    //Is the alphabet parameter exactly twenty-six characters long?
    if (alphabet.length !== 26) { return false }
    
    //Is every entry in the alphabet parameter unique?
    for(let i = 0; i < alphabet.length; i++) {
      for(let j = i + 1; j < alphabet.length; j++) { 
        if (alphabet[i] == alphabet[j]) return false;
      }
    }
    
    //Make the input lowerCase and create output to return
    let newInput = input.toLowerCase();
    let output = [];

    //Create the variables & constants encoding/decoding
    const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t','u','v', 'w', 'x', 'y', 'z'] ;
    let alphabetArray = alphabet.split('');
    let encodeCipher = {};
    let decodeCipher = {};
  
    //Encode or Decode based on encode parameter.
    if (encode) {
      //Build the cipher for encoding
      for (let i = 0; i < alphabetArray.length; i++) {
      
        keys.forEach((key, i) => encodeCipher[key] = alphabet[i]);
    
      }
      console.log(encodeCipher);
      
      //For the length of the given message...
      for (let i = 0; i < newInput.length; i++) {
        let newChar = newInput[i];
        if (newChar.match(/[a-z]/i)) {
          newChar = encodeCipher[newChar];
          output.push(newChar);
        } else {
          //If it's not in the encodeCipher, push newChar as is.
          output.push(newChar);
        }
      }
      return output.join("");
   } else {
      //Build the cipher for decoding
      for (let i = 0; i < alphabetArray.length; i++) {
      
        alphabetArray.forEach((key, i) => decodeCipher[key] = keys[i]);
    
      }
     
     //For the length of the given message...
     for (let i = 0; i < newInput.length; i++) {
       //Check the current character given in the message
       let newChar = newInput[i];
       //Check if the character is in the cipherAlphabet
       if(newChar in decodeCipher) {
         newChar = decodeCipher[newChar];
         output.push(newChar);
       } else {
         //If it's not in the decodeCipher, push newChar as is.
         output.push(newChar);
       }
     }
     return output.join("");
   }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
