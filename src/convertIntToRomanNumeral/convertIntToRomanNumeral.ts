export function convertIntToRomanNumeral(val: string) {
    const romanNumeralStringArray: string[] = [];

    const splitValString = val.split("");

    splitValString.slice().reverse().forEach((val, index) => {
        if (index === 0) {
            console.log(val)
            console.log("ones")
            romanNumeralStringArray.push(onesPlaceConverter(val));
        }
        if (index === 1) {
            console.log(val)
            console.log("tens")
            romanNumeralStringArray.push(tensPlaceConverter(val));
        }
        if (index === 2) {
            console.log(val)
            console.log("hundreds")
            romanNumeralStringArray.push(hundredsPlaceConverter(val))
        }
        if (index === 3) {
            console.log(val)
            console.log("thousands")
            romanNumeralStringArray.push(thousandsPlaceConverter(val))
        }
    })


    return romanNumeralStringArray.reverse().concat();
}

function onesPlaceConverter(val: string) {
    const numVal = Number(val);
    switch (true) {
        case (numVal === 1): {
            return "I"
        }
        case (numVal === 2): {
            return "II"
        }
        case (numVal === 3): {
            return "III"
        }
        case (numVal === 4): {
            return "IV"
        }
        case (numVal === 5): {
            return "V"
        }
        case (numVal === 6): {
            return "VI"
        }
        case (numVal === 7): {
            return "VII"
        }
        case (numVal === 8): {
            return "VIII"
        }
        case (numVal === 9): {
            return "IX"
        }
        default:
            return "";
    }
}

function tensPlaceConverter(val: string) {
    const numVal = Number(val);
    switch (true) {
        case (numVal === 1): {
            return "X"
        }
        case (numVal === 2): {
            return "XX"
        }
        case (numVal === 3): {
            return "XXX"
        }
        case (numVal === 4): {
            return "XL"
        }
        case (numVal === 5): {
            return "L"
        }
        case (numVal === 6): {
            return "LX"
        }
        case (numVal === 7): {
            return "LXX"
        }
        case (numVal === 8): {
            return "LXXX"
        }
        case (numVal === 9): {
            return "XC"
        }
        default:
            return "";
    }
}

function hundredsPlaceConverter(val: string) {
    const numVal = Number(val);
    switch (true) {
        case (numVal === 1): {
            return "C"
        }
        case (numVal === 2): {
            return "CC"
        }
        case (numVal === 3): {
            return "CCC"
        }
        case (numVal === 4): {
            return "CD"
        }
        case (numVal === 5): {
            return "D"
        }
        case (numVal === 6): {
            return "DC"
        }
        case (numVal === 7): {
            return "DCC"
        }
        case (numVal === 8): {
            return "DCCC"
        }
        case (numVal === 9): {
            return "CM"
        }
        default:
            return "";
    }
}

function thousandsPlaceConverter(val: string) {
    const numVal = Number(val);
    switch (true) {
        case (numVal === 1): {
            return "M"
        }
        case (numVal === 2): {
            return "MM"
        }
        case (numVal === 3): {
            return "MMM"
        }
        default:
            return "";
    }
}

