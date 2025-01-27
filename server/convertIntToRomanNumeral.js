function convertIntToRomanNumeral(int) {
  const stringInt = int.toString();
  const romanNumeralStringArray = [];
  const splitValString = stringInt.split("");
  // The goal here is to create an array of characters that can be iterated over to generate the correct roman numerals
  // We reverse the array so we can start at the ones place and move towards the thousands place if the base value is that large
  splitValString
    // .slice()
    .reverse()
    .forEach((val, index) => {
      if (index === 0) {
        romanNumeralStringArray.push(onesPlaceConverter(val));
      }
      if (index === 1) {
        romanNumeralStringArray.push(tensPlaceConverter(val));
      }
      if (index === 2) {
        romanNumeralStringArray.push(hundredsPlaceConverter(val));
      }
      if (index === 3) {
        romanNumeralStringArray.push(thousandsPlaceConverter(val));
      }
    });

  const formattedRomanNumeral = romanNumeralStringArray.reverse().join("");
  return formattedRomanNumeral;
}

// Roman numeral specification was found at https://en.wikipedia.org/wiki/Roman_numerals, see the Standard form in that document
function onesPlaceConverter(val) {
  const numVal = Number(val);
  switch (true) {
    case numVal === 1: {
      return "I";
    }
    case numVal === 2: {
      return "II";
    }
    case numVal === 3: {
      return "III";
    }
    case numVal === 4: {
      return "IV";
    }
    case numVal === 5: {
      return "V";
    }
    case numVal === 6: {
      return "VI";
    }
    case numVal === 7: {
      return "VII";
    }
    case numVal === 8: {
      return "VIII";
    }
    case numVal === 9: {
      return "IX";
    }
    default:
      return "";
  }
}

function tensPlaceConverter(val) {
  const numVal = Number(val);
  switch (true) {
    case numVal === 1: {
      return "X";
    }
    case numVal === 2: {
      return "XX";
    }
    case numVal === 3: {
      return "XXX";
    }
    case numVal === 4: {
      return "XL";
    }
    case numVal === 5: {
      return "L";
    }
    case numVal === 6: {
      return "LX";
    }
    case numVal === 7: {
      return "LXX";
    }
    case numVal === 8: {
      return "LXXX";
    }
    case numVal === 9: {
      return "XC";
    }
    default:
      return "";
  }
}

function hundredsPlaceConverter(val) {
  const numVal = Number(val);
  switch (true) {
    case numVal === 1: {
      return "C";
    }
    case numVal === 2: {
      return "CC";
    }
    case numVal === 3: {
      return "CCC";
    }
    case numVal === 4: {
      return "CD";
    }
    case numVal === 5: {
      return "D";
    }
    case numVal === 6: {
      return "DC";
    }
    case numVal === 7: {
      return "DCC";
    }
    case numVal === 8: {
      return "DCCC";
    }
    case numVal === 9: {
      return "CM";
    }
    default:
      return "";
  }
}

function thousandsPlaceConverter(val) {
  const numVal = Number(val);
  switch (true) {
    case numVal === 1: {
      return "M";
    }
    case numVal === 2: {
      return "MM";
    }
    case numVal === 3: {
      return "MMM";
    }
    default:
      return "";
  }
}

module.exports = convertIntToRomanNumeral