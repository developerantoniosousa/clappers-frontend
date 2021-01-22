import { browser, by, element, ElementFinder, protractor } from 'protractor';

export class HomePage {

    getAmounToShare(): ElementFinder {
        return element(by.css('.amount .amount-item__to-share'));
    }
}




