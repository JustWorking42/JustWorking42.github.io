function switchLanguage(lang) {
    setCookie('lang', lang, 365);
    fetch(`index_${lang}.html`)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            var enFlag = document.querySelector('.flag[src="en.png"]');
            var ruFlag = document.querySelector('.flag[src="ru.png"]');
            if (lang === 'ru') {
                enFlag.classList.remove('active');
                ruFlag.classList.add('active');
            } else {
                enFlag.classList.add('active');
                ruFlag.classList.remove('active');
            }
        });
}

window.onload = function() {
    var lang = getCookie('lang') || 'en';
    switchLanguage(lang);
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}