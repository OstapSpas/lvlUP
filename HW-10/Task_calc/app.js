
var x = prompt('Введіть перше число');
var y = prompt('Введіть друге число');
var z = prompt('Введіть 1,щоб спрацював знак +, Введіть 2, щоб спрацював знак -,введіть 3, зоб спрацював знак -, введіть 4, щоб спрацював знак /');

var x = parseInt(x);
var y = parseInt(y);


var result;

switch (z) {
    case '1': result = x + y;
        break;
    case '2': result = x - y;;
        break;
    case '3': result = x * y;;
        break;
    case '4': result = x / y;;
        break;
    default: result = "None"
}
alert(result);


