

const numWord = {
  digits: [""," one"," two"," three"," four"," five"," six"," seven"," eight"," nine"," ten"," eleven"," twelve"," thirteen"," fourteen"," fifteen"," sixteen"," seventeen"," eighteen"," nineteen"],
  tens: [""," ten"," twenty"," thirty"," forty"," fifty"," sixty"," seventy"," eighty"," ninety"],
  beyond: [""," hundred"," thousand"," million"," billion"," trillion"," quadrillion"]
};


intToWord = (integerIn) => {
  let input = Math.abs(parseInt(integerIn, 10));
  let output = ((input === 0) ? (" zero") : (""));
  let iter = 0;

  while (input > 0) {

    const hundsPlace = input % 1000;
    if (hundsPlace > 0) { // if the current section is non-zero (ex. 89,XXX,910)

      const tensPlace = hundsPlace % 100;
      output = numWord.digits[Math.floor(hundsPlace / 100)] + // digit in the hundreds place
          ((hundsPlace > 100) ? (numWord.beyond[1]) : ("")) + // add the word "hundred" or not
          ((tensPlace < 20) ? (numWord.digits[tensPlace]) : // add a weird word like "twelve" or...
            (numWord.tens[Math.floor(tensPlace / 10)] + numWord.digits[hundsPlace % 10])) + // build the normal tens + ones word
          numWord.beyond[iter] + output; // add quantifier like "million" depending on iteration number
    }

    iter = (((iter === 0) && (input > 100)) ? (iter += 2) : (iter++));
    input = Math.floor(input / 1000); // get the next section of 3 digits
  }
  return ((integerIn < 0) ? (" negative" + output) : (output));
};

console.log("0 :" + intToWord(0));
console.log("1 :" + intToWord(1));
console.log("022 :" + intToWord(022));
console.log("18 :" + intToWord(18));
console.log("-18 :" + intToWord(-18));
console.log("124312 :" + intToWord(124312));

