import { FIRST_TEN, SECOND_TEN, TENS } from "./const";

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
            return TENS[strNum[0]] + ` ` + FIRST_TEN[strNum[1]];
        }
    }

    if (number >= 100 && number < 1000) {
        if (strNum[2] == 0 && strNum[1] == 0) {
            return FIRST_TEN[strNum[0]] + ` hundred`;
        }

        if (strNum[1] == 1) {
            return FIRST_TEN[strNum[0]] + ` hundred ` + SECOND_TEN[strNum[2]]
        }

        if (strNum[2] == 0) {
            return FIRST_TEN[strNum[0]] + ` hundred ` + TENS[strNum[1]];
        } else {
            return FIRST_TEN[strNum[0]] + ` hundred ` + TENS[strNum[1]] + ` ` + FIRST_TEN[strNum[2]];
        }
    }
}
