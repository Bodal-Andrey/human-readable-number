const FIRST_TEN = {
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
    10: 'ten'
};

const SECOND_TEN = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
    0: 'twenty'
};

const TENS = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
};

module.exports = function toReadable(number) {
    const strNum = number.toString();

    if (number >= 0 && number <= 10) {
        return FIRST_TEN[number];
    }

    if (number > 10 && number <= 20) {
        return SECOND_TEN[strNum[1]];
    }

    if (number > 20 && number <= 99) {
        if (strNum[1] == 0) {
            return TENS[strNum[0]];
        } else {
            return TENS[strNum[0]] + " " + FIRST_TEN[strNum[1]];
        }
    }

    if (number >= 100 && number < 1000) {
        if (strNum[2] == 0 && strNum[1] == 0) {
            return FIRST_TEN[strNum[0]] + " hundred";
        }

        if (strNum[2] == 0 && strNum[1] == 1) {
            return FIRST_TEN[strNum[0]] + " hundred " + FIRST_TEN[10]
        }

        if (strNum[1] == 0) {
            return FIRST_TEN[strNum[0]] + " hundred " + FIRST_TEN[strNum[2]]
        }

        if (strNum[1] == 1) {
            return FIRST_TEN[strNum[0]] + " hundred " + SECOND_TEN[strNum[2]];
        }

        if (strNum[2] == 0) {
            return FIRST_TEN[strNum[0]] + " hundred " + TENS[strNum[1]];
        } else {
            return FIRST_TEN[strNum[0]] + " hundred " + TENS[strNum[1]] + " " + FIRST_TEN[strNum[2]];
        }
    }
}
