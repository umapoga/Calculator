function calculate(operator) {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter both numbers";
        return;
    }

    let result;

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        if (num2 == 0) {
            document.getElementById("result").innerHTML = "Cannot divide by zero";
            return;
        }
        result = num1 / num2;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}