app.service("translateService", translateService);

function translateService($translate) {
    $translate.use("en");

    this.changeLanguage = (languageTitle) => {
        $translate.use(languageTitle);
    }
}