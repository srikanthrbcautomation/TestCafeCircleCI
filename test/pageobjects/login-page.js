import { Selector } from 'testcafe';

export default class LoginPage {
    constructor () {

        this.email = Selector('[data-qa-id="email"]');
        this.password = Selector('[data-qa-id="password"]');
        this.forgotPassword = Selector('[data-qa-id="forgot-password"]');
        this.next = Selector('[data-qa-id="next"]');
        this.signUp = Selector('[data-qa-id="sign-up-link"]');

    }

    async login(t, username, password) {
        await t
            .click(this.email)
            .typeText(this.email, username)
            .click(this.password)
            .typeText(this.password, password)
            .click(this.next)
    }
}