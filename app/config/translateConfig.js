app.config(function ($translateProvider) {
    $translateProvider.translations("en", {
        'Grodno': 'Grodno',
        FOO: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german'
    });

    $translateProvider.translations("ru", {
        'Grodno' : 'Гродно',
        'Minsk': 'Минск',
        'Homyel': 'Гомель',
        'Brest': 'Брест',
        'Vitsyebsk': 'Витебск',
        'Mahilyow': 'Могилев',
        'Vawkavysk': 'Волковысск',
        'Mazyr' : 'Мозырь',
        'Babruysk': 'Бобруйск',
        'Orsha': 'Орша',
        'Maladzyechna': 'Молодечно',
        'Pinsk': 'Пинск',
        'Kobryn': 'Кобрин',
        'Smarhon': 'Сморгонь',
        'Bykhaw': 'Быков',
        'Baranavichy': 'Барановичи',
        'Iwye': 'Ивье',
        'Find city' : "Найти город",
        'Forecasts': 'Прогнозы',
        'Favourite': 'Избранное',
        'broken clouds': 'переменная облачность',
        'scattered clouds' : 'рассеянные облака',
        'clear sky' : 'чистое небо',
        'light snow' : 'небольшой снег',
        'overcast clouds' : 'пасмурно',
        'few clouds' : 'слабая облачность',
        'Direction' : 'Направление',
        'Pressure' : 'Давление',
        'Wind speed' : 'Ветер',
        'Humidity' : 'Влажность'
    });

    $translateProvider.fallbackLanguage("en");

    $translateProvider.preferredLanguage("en");
});