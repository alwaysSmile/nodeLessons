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
var user = require('./user');

function run() {
    var vasya = new user.User("Вася");
    var petya = new user.User("Петя");

    vasya.hello(petya);
}
//Если какой-то другой модуль подключил наш файл server.js,
//то нужно его экспортировать
if(module.parent){
    exports.run = run;
}
//Если нет, то сервер запущен сам по себе
else {
    run();
}
//**********

