//Example1
//**********
////В Node.js каждый файл - это отдельный модуль,
////не как в JavaScript, то есть всё, что находится в
////текущем файле - принадлежит этому файлу,
////поэтому мы используем метод exports
////require - подключить index.js
//var user = require('./user');
//
//var vasya = new user.User("Вася");
//var petya = new user.User("Петя");
//
//vasya.hello(petya);
//**********


//Example2
//**********
//modul.parent

//******
////Модуль server.js будет запускать этот функционал, только
////если он запущен явно, то есть с помощью командной строки
//
////var user = require('./user');
////var vasya = new user.User("Вася");
////var petya = new user.User("Петя");
////
////vasya.hello(petya);
////******
//
////******
////Если какой-то другой модуль подключил наш файл server.js,
////то нужно его экспортировать
//
//var user = require('./user');
//
//function run() {
//    var vasya = new user.User("Вася");
//    var petya = new user.User("Петя");
//
//    vasya.hello(petya);
//}
//
//
////Если какой-то другой модуль подключил наш файл server.js,
////то нужно его экспортировать
//if (module.parent) {
//    console.log('другой модуль подключил наш файл server.js');
//    exports.run = run;
//}
////Если нет, то сервер запущен сам по себе
//else {
//    console.log('сервер запущен сам по себе');
//    run();
//}
//**********
//Example3
//**********

var db = require('./db');
db.connect();
var User = require('./user');

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);
    console.log(db.getPhrase('Run successful'));
}
if (module.parent) {


    console.log('другой модуль подключил наш файл server.js');
    exports.run = run;
}
else {
    console.log('сервер запущен сам по себе');
    run();
}

//**********
