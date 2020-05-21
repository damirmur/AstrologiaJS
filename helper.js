let register = function(Handlebars) {
let helpers = {
sayHello: function(elem) {
  return 'hello!'
  },
getTime: function(){
     
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return "Текущее время: " + hour + ":" + minute + ":" + second;
}
};
if (Handlebars && typeof Handlebars.registerHelper === "function") {
  for (let prop in helpers) {
    Handlebars.registerHelper(prop, helpers[prop]);
  }
} else {
  return helpers;
}
};
module.exports.register = register;




