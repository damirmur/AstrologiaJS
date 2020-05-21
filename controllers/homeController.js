var astrolog = require ('../astrolog');
console.log('Date '+astrolog.astrodate.toString());
exports.index = function (request, response) {
    response.render("home.hbs",{astrotexts:(astrolog)});
    };    
exports.about = function (request, response) {
    response.render("about.hbs");
};


