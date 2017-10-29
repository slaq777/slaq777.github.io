var langs = {ru:'ru', en:'en'};
var langCode = '';
var langJS = null;

function translate(jsdata)
{
    $("[tkey]").each (function (index)
    {
        var strTr = jsdata [$(this).attr ('tkey')];
        $(this).html (strTr);
    });
}

langCode = navigator.language.substr (0, 2);

if (langs[langCode])
	$.getJSON('lang/'+langCode+'.json', translate);
else
	$.getJSON('lang/en.json', translate);






