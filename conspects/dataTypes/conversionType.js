// toString

let value = 123;
let newValue = String(value);  // '123'
newValue = value.toString();  // '123'


//toNumber

value = '123';
newValue = +value;  // 123
newValue = Number(value);  // 123
newValue = parseInt(value);  // 123
newValue = parseFloat('123.3');  // 123.3
newValue = parseFloat('123.2354687').toPrecision(4); // 123.2 общая длинна числа
newValue = parseFloat('123.2354687').toFixed(4); // 123.2355 длина после запятой


value = 'fsdfsf';
newValue = +value;  // NaN

//toBoolean

newValue = Boolean(value);  // true
newValue = !!value;  // true

