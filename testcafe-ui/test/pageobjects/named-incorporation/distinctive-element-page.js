import { Selector } from 'testcafe';

export default class DistinctiveElementPage {
    constructor () {

        this.businessName = Selector('[data-qa-id="business-name"]');
        this.businessIndustry = Selector('[data-qa-id="business-industry"]');
        this.businessDescription = Selector('[data-qa-id="business-description"]');
        this.nameInitialsYes = Selector('[data-qa-id="name-or-initials-yes"]');
        this.nameInitialsNo = Selector('[data-qa-id="name-or-initials-no"]');
        this.firstNameOnly = Selector('[data-qa-id="name-first-name-only"]');
        this.lastNameOnly = Selector('[data-qa-id="name-last-name-only"]');
        this.firstAndLastName = Selector('[data-qa-id="name-first-and-last-name"]');
        this.yourInitials = Selector('[data-qa-id="name-your-initials"]');
        this.geoNameYes = Selector('[data-qa-id="geo-name-yes"]');
        this.geoNameNo = Selector('[data-qa-id="geo-name-no"]');
        this.foreignYes = Selector('[data-qa-id="foreign-yes"]');
        this.foreignNo = Selector('[data-qa-id="foreign-no"]');
        this.madeUpYes = Selector('[data-qa-id="made-up-yes"]');
        this.madeUpNo = Selector('[data-qa-id="made-up-no"]');

    }

    getBusinessName() {
        return this.businessName.innerText;
    }

    getBusinessIndustry() {
        return this.businessIndustry.innerText;
    }

    getBusinessDescription() {
        return this.businessDescription.innerText;
    }
}