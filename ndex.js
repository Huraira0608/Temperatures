function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

function convertTemperature(temperature, fromUnit, toUnit) {
    if (fromUnit === "C" && toUnit === "F") {
        var result = celsiusToFahrenheit(temperature);
        return temperature + "°C is " + result + "°F";
    } else if (fromUnit === "F" && toUnit === "C") {
        var result = fahrenheitToCelsius(temperature);
        return temperature + "°F is " + result + "°C";
    } else {
        return "Invalid conversion units.";
    }
}

// Example usage:
console.log(convertTemperature(60, "C", "F"));
console.log(convertTemperature(45, "F", "C"));