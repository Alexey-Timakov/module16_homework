const xValue = prompt("Введите число");
console.log(xValue, Number.isNaN(+xValue));

export const calculateY = x => {
    if (!Number.isNaN(+x) && (x !== null) && (x !== "")) {
        const yValue = 15*x/12 + (4*x**2 + 18 - 23*x)/(5*x/9 + 18*x**4/33);
        return yValue;
    } else {
        return "Введено некорректное значение!";
    }
};

alert(calculateY(xValue));