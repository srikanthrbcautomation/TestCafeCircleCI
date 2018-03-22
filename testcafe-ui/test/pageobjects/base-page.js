import { Selector } from 'testcafe';

export default class BasePage {
    constructor() {
        this.qaUrl = "https://www.qa.sup.rangleapp.io/ca/en";
        this.resetIncorporation = Selector('[data-qa-id="reset-incorporation"]');
        this.resetSoleProp = Selector('[data-qa-id="reset-sole-prop"]');
        this.start = Selector('[data-qa-id="start"]');
        this.back = Selector('[data-qa-id="back"]');
        this.next = Selector('[data-qa-id="next"]');
        this.newSearch = Selector('[data-qa-id="new-search"]');
        this.nextStep = Selector('[data-qa-id="next-step"]');
        this.previousStep = Selector('[data-qa-id="prev-step"]');
    }
}


