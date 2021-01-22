import { UtilsPage } from '../page-objects/utils.po'
import { RecognitionPage } from '../page-objects/recognition.po'
import { HomePage } from '../page-objects/home.po'
import { browser, logging } from 'protractor';

const utils = new UtilsPage();
const recognition = new RecognitionPage();
const home = new HomePage();

describe('Dado que eu realizei uma transferência', () => {

    describe('Quando eu voltar para a home', () => {

        it('Então eu confiro se foi debitado o valor correto' ,() => {
            expect(home.getAmounToShare().getText()).toEqual('190');
        });
    });
});
