const questiontempC = 'Введіть температуру в цельсіях';
const tempC = prompt(questiontempC);

const tempF = tempC * 1.8 + 32;
const answer = `Температура в Фаренгейтах - ${ tempF }℉`;
alert (answer);