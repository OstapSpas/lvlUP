const heightCylinder = ('Вкажіть висоту циліндра');
const hCylinder = prompt (heightCylinder);

const diametrCylinder = ('Вкажіть діаметр основи');
const Dcylinder = prompt(diametrCylinder);

const Cylinder = 3.14 * hCylinder*Dcylinder;
const answer = `Об'єм циліндра - ${ Cylinder }℉`;
alert(answer)
