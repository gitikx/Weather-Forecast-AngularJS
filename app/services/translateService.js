app.service("translateService", translateService);

function translateService($translate) {

    this.changeLanguage = (languageTitle) => {
        $translate.use(languageTitle);
    }
}