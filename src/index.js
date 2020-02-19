module.exports = function toReadable (number) {
    let textNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
      }
    if(number <= 10) {
        return textNumbers[number];
    }
      let hundreds = Math.floor(number / 100);
      let dozens = Math.floor(number % 100 / 10);
      let units = number % 100 % 10;
      let hundredsRes = hundreds ? `${textNumbers[hundreds]} hundred ` : '';
      if (!dozens && !units) return hundredsRes.trim();
      let dozensRes = dozens && dozens >= 2 ? `${textNumbers[dozens * 10]} ` : textNumbers[dozens * 10 + units];
      let unitsRes = textNumbers[units];
      return (hundredsRes + dozensRes + (dozens >= 2 && units ? unitsRes : '')).trim();
}
