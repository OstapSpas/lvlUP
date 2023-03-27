const questionDistance = 'Яка відстань у км між двома містами';
const distance = prompt (questionDistance);

const questionHours = 'За скільки годин хочете дістатися?';
const Hours = prompt (questionHours);

const speed = distance/Hours;
const answer = `Вам необхідно рухатися із ${ speed }км/год`;
alert (answer);