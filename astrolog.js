var swisseph = require ('swisseph');
const chart={}; 
// Test date
var date = {year: 1971, month: 11, day: 19, hour: 19.5};
//console.log ('Test date:', date);
chart.astrodate=date.day+'.'+date.month+'.'+date.year+' '+date.hour;
 
var flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_SWIEPH;

strtime = function (value) {
	var hour = Math.floor (value);
	var minFrac = (value - hour) * 60;
	var min = Math.floor (minFrac);
	var sec = Math.floor ((minFrac - min) * 60);
	
	return hour + ' ' + min + ' ' + sec;
};

logbody = function (name, body) {
    var lang = body.longitude;
    var sign = Math.floor (lang / 30);
    var lang30 = lang - sign * 30;
    chart[name]=body.longitude+'|'+ strtime (lang30)+ '|'+ sign+ (body.longitudeSpeed < 0 ? 'R' : '');
//    console.log (str);
};

// path to ephemeris data
swisseph.swe_set_ephe_path (__dirname + '/../ephe');
 
// Julian day
swisseph.swe_julday (date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL, function (julday_ut) {
    console.log ('Julian UT day for date:', julday_ut);
 
    // Sun position
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_SUN, flag, function (body) {
        logbody ('Sun', body);
    });
 
    // Moon position
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_MOON, flag, function (body) {
        logbody ('Moon', body);
    });
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_VENUS, flag, function (body) {
        logbody ('Venus', body);
    });
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_MARS, flag, function (body) {
        logbody ('Mars', body);
    });
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_JUPITER, flag, function (body) {
        logbody ('Jupiter', body);
    });
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_SATURN, flag, function (body) {
        logbody ('Saturn', body);
    });
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_URANUS, flag, function (body) {
        logbody ('Uranus', body);
    });
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_NEPTUNE, flag, function (body) {
        logbody ('Neptune', body);
    });
    swisseph.swe_calc_ut (julday_ut, swisseph.SE_PLUTO, flag, function (body) {
        logbody ('Pluto', body);
    });
});
//console.log (chart);
module.exports = chart;

