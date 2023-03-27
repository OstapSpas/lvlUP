const message = 'Enter the number: ';
const number = prompt(message);
const sum1 = number%1000;//456
const sum2 = (number - sum1)/1000;//123456-456=123000
const n6 = sum1%10;
const n5 = (sum1-n6)%100;
const n4 = (sum1-n5-n6)/100;
const n3 = sum2%10;
const n2 = (sum2-n3)%100;
const n1 = (sum2-n3-n2)/100;
if((n6+n5+n4) == (n3+n2+n1))
alert('Lucky ticket!');
else
alert('Unlucky ticket!');

