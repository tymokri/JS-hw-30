'use strict';

function counter(num = 0) {

    const increase = () => {
      return num += 1;
    }

    const decrease = () => {
        return num -= 1;
    }

    const getValue = () => {
        return num;
    }

    return {
        increase,
        decrease,
        getValue
    }
}

const result = counter(5);

console.log(result.decrease());
console.log(result.decrease());
console.log(result.increase());
console.log(result.increase());
console.log(result.getValue());