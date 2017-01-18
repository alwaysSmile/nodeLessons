//Example1
//**********
//var phrases = require('./ru');
//
//function User(name) {
//    this.name = name;
//}
//
//User.prototype.hello = function (who) {
//    console.log(phrases.Hello + ", " + who.name);
//};
//
////exports - это объект, который содержит наш код
////и вернёт это в результате require
//exports.User = User;
//**********


//Example2
//**********
var phrases = require('./ru');

function User(name) {
    this.name = name;
}


User.prototype.hello = function (who) {
    console.log(phrases.Hello + ", " + who.name);
};

//exports - это объект, который содержит наш код
//и вернёт это в результате require

//******
//Когда мы записываем свойство в exports для того,
//чтобы вынести из модуля  - на самом деле мы пишем в module.exports
//module.exports - истинное свойство объекта модуль,
//а exports и this - это ссылки на него
//module.exports = exports = this

//Поэтому можно записать:
//exports.User = User;//Вариант 1
//this.User = User;//Вариант 2
//module.exports.User = User;//Вариант 3
//******

exports.User = User;
//**********

