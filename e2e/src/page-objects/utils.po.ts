import { browser, by, element, ElementFinder, protractor } from 'protractor';

export class UtilsPage {
readonly TIMEOUT_DEFAULT = 15000;

  async navigateTo() {
    await browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    console.log("navigateToOk");
    return await browser.get(browser.baseUrl);
  }

  login(user: string, password: string) {
    this.visibilityOf(element(by.css('.form-field [name="username"]')));

    element(by.css('.form-field [name="username"]')).sendKeys(user);
    element(by.css('.form-field [name="password"]')).sendKeys(password);
    element(by.buttonText('Login')).click();

    this.urlContains('home', 25000);
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl);
  }

  /**
   * Aguarda até que o elemento esteja visível na tela.
   * @param elementToCheck - ElementFinder que estará visivel na aplicação.
   * @param timeOut - Tempo que o proctrator deve esperar até que elemento esteja visível.
   * Este parametro é opcional, o valor default de timeout é de 8 segundos.
   */
  visibilityOf(elementToCheck: ElementFinder, timeOut = this.TIMEOUT_DEFAULT) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(elementToCheck), timeOut);
  }

  /**
   * Aguarda até que a URL contenha o texto informado.
   * @param textURL - Texto que deve estar presente na URL.
   * @param timeOut - Tempo que o proctrator deve esperar até que o texto esteja presente na URL.
   * Este parametro é opcional, o valor default de timeout é de 8 segundos.
   */
  urlContains(textURL: string, timeOut = this.TIMEOUT_DEFAULT) {
    browser.wait(protractor.ExpectedConditions.urlContains(textURL), timeOut);
  }
}

