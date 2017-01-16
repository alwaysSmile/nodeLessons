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
exports.User = User;
//**********
