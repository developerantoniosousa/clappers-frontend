import { UtilsPage } from '../page-objects/utils.po'
import { RecognitionPage } from '../page-objects/recognition.po'
import { HomePage } from '../page-objects/home.po'
import { browser, logging } from 'protractor';

const utils = new UtilsPage();
const recognition = new RecognitionPage();
const home = new HomePage();

describe('Dado que estou acessando o TOTVS Claps', () => {
  
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    utils.navigateTo();
    utils.login('adolfoquaranta', '123456');
  });

  describe('Quando eu clicar em Enviar Claps! para fazer uma transferência', () => {

    beforeAll(() => {
      recognition.getBtnSendClaps().click();
      utils.visibilityOf(recognition.getSearchTitle());
    });

    it('Então eu escolho um colega de equipe para reconhecer', () => {
      recognition.getUserRecognition(3);
      utils.visibilityOf(recognition.getCategoryTitle());
    });
  
    it('Então eu escolho a categoria a qual desejo reconhecê-lo', () => {
      recognition.getSelectCategory(3);
      utils.visibilityOf(recognition.getClapsTitle());
    });
  
    it('Então eu informo quantos claps desejo transferir', () => {
      recognition.getClaps(2).click();
    });
  
    it('Então eu clico em CLAP! para transferir', () => {
      recognition.getBtnClap().click();
      utils.visibilityOf(recognition.getSuccessMessage());
    });    

    it('Então eu clico em Ok para voltar para a página inicial')
      recognition.getBtnOk().click();
      utils.visibilityOf(home.getAmounToShare());
    });
});


