var phrases = require('./ru');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(phrases.Hello + ", " + who.name);
};

console.log("user.js is required");
//exports - это объект, который содержит наш код
//и вернёт это в результате require
exports.User = User;
