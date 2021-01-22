import { browser, by, element, ElementArrayFinder, ElementFinder, protractor } from 'protractor';

export class RecognitionPage {

    getBtnSendClaps(): ElementFinder {
        return element(by.buttonText('Enviar Claps!'));
    }

    getSearchTitle(): ElementFinder {
        return element(by.css('.search__title'));
    }

    getUserRecognition(item:number): ElementFinder {
        return element(by.css('.team-member')).get(item);
    }

    getCategoryTitle(): ElementFinder {
        return element(by.css('.select-category .title'));
    }

    getSelectCategory(item:number): ElementFinder {
        return element(by.css('.category')).get(item);
    }

    getClapsTitle(): ElementFinder {
        return element(by.css('.select-amount .title'));
    }

    getClaps(item:number): ElementFinder {
        return element(by.css('.controls .select-amount')).get(item);
    }

    getBtnClap(): ElementFinder {
        return element(by.buttonText('CLAP!'));
    }

    getSuccessMessage(): ElementFinder {
        return element(by.css('.success-message'));
    }

    getBtnOk(): ElementFinder {
        return element(by.buttonText('Ok'));
    }
}