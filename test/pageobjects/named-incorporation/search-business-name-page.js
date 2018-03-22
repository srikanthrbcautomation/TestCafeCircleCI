import { Selector } from 'testcafe';

export default class SearchBusinessNamePage {
    constructor () {
        this.businessName = Selector('[data-qa-id="business-name"]');
        this.search = Selector('[data-qa-id="search"]');
        this.totalSearches = Selector('[data-qa-total]');
    }

    getTotalSearches(totalNumber) {
        return Selector(`[data-qa-total="${totalNumber}"]`).exists
        //return this.totalSearches.getAttribute('data-qa-total');
    }
}

