//База данных
var phrases;
//exports.connect - база данных загружает фразы
exports.connect = function () {
    phrases = require('./ru');
};
//Делаем запрос из базы данных с помощью метода exports.getPhrase
exports.getPhrase = function (name) {
    if (!phrases[name]) {
        throw  new  Error("Нет такой фразы " + name);
    }
    return phrases[name];
};