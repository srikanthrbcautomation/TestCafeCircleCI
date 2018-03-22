import { Selector } from 'testcafe';

export default class Page {
    constructor () {

        this.soleProprietorship = Selector('[data-qa-id="select-sole-prop"]');
        this.firstName = Selector('[data-qa-id="first-name"]');
        this.lastName = Selector('[data-qa-id="last-name"]');
        this.email = Selector('[data-qa-id="email"]');
        this.consentIAgree = Selector('[data-qa-id="agree-terms"]');
        this.verifyEmailText = Selector('[data-qa-id="verify-email"]');
        this.password = Selector('[data-qa-id="password"]');
    }
}
