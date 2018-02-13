

const numWord = {
  digits: [""," one"," two"," three"," four"," five"," six"," seven"," eight"," nine"," ten"," eleven"," twelve"," thirteen"," fourteen"," fifteen"," sixteen"," seventeen"," eighteen"," nineteen"],
  tens: [""," ten"," twenty"," thirty"," forty"," fifty"," sixty"," seventy"," eighty"," ninety"],
  beyond: [""," hundred"," thousand"," million"," billion"," trillion"," quadrillion"]
};


intToWord = (integerIn) => {
  let input = Math.abs(integerIn);
  let output = "";
  let iter = 0;

  if (input === 0) output = " zero";

  while (input > 0) {

    if ((input % 1000) > 0) { // if the hundreds/tens/one place is non-zero

      if ((input % 100) < 20) { // if theres a number like "twelve" or "ninteen"
        output = numWord.digits[input % 100] + numWord.beyond[iter] + output;
      }
      else { // build the tens, then ones, then 
        output = numWord.tens[Math.floor((input % 100) / 10)] + numWord.digits[input % 10] + numWord.beyond[iter] + output;
      }
      if ((input % 1000) < 100) {
        output = numWord.digits[Math.floor((input % 1000) / 100)] + output;
      }
      else {
        output = numWord.digits[Math.floor((input % 1000) / 100)] + numWord.beyond[1] + output;
      }
    }

    if ((iter === 0) && (input > 100)) { iter++; }
    iter++;
    input = Math.floor(input / 1000);
  }
  if (integerIn < 0) {
    output = " negative" + output;
  }
  return output;
};

console.log("0 :" + intToWord(0));
console.log("1 :" + intToWord(1));
console.log("022 :" + intToWord(022));
console.log("18 :" + intToWord(18));





