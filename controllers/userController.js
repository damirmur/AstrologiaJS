exports.addUser = function (request, response){
    response.send("Добавление пользователя");
};
exports.getUsers = function(request, response){
    response.render("users.hbs");
};


