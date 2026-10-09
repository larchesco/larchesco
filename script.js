let currentLang = 'en';

const translations = {
    en: { sub: "Blah, blah, blah – Larchesco", tg: "✈️ Telegram Channel" },
    ru: { sub: "Бла, бла, бла – Larchesco", tg: "✈️ Telegram канал" }
};

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('sub-text').innerText = translations[lang].sub;
    document.getElementById('link-tg').innerText = translations[lang].tg;

    document.getElementById('btn-en').classList.remove('active');
    document.getElementById('btn-ru').classList.remove('active');
    document.getElementById('btn-' + lang).classList.add('active');
}
