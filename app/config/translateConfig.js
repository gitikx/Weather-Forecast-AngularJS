app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'GRODNO': 'Hello',
        FOO: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german'
    });

    $translateProvider.translations('ru', {
        'GRODNO' : 'Гродно',
        FOO: 'Dies ist ein Paragraph.',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch'
    });

    $translateProvider.fallbackLanguage("ru");

    $translateProvider.preferredLanguage("ru");
});