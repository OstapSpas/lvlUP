let questionDNK = "Введіть одну сторону рядка ДНК";
let DNK = prompt(questionDNK);

let transformDNK = function () {
    let arr = ["A", "T", "G", "T", "A"];

    // видалимо 3 перших елементи і замінимо їх іншими
    arr.splice(0, 3, "Let's", "dance");

    alert( arr ) // отримаєм ["Let's", "dance", "right", "now"]
}