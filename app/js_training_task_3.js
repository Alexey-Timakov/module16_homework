// const xValue = +prompt("Введите число");

export const calculateY = x => {
    const yValue = 15*x/12 + (4*x**2 + 18 - 23*x)/(5*x/9 + 18*x**4/33);
    return yValue;
}

// alert(calculateY(xValue));

// module.exports.calculateY = calculateY