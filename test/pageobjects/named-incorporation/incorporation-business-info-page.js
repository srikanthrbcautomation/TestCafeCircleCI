import { Selector } from 'testcafe';

export default class IncorporationBusinessInfoPage {
    constructor () {

        this.businessName = Selector('[data-qa-id="business-name"]');
        this.businessIndustry = Selector('[data-qa-id="business-industry"]');
        this.businessDescription = Selector('[data-qa-id="company-info"] [data-qa-id="business-description"]');
        this.legalEnding = Selector('[data-qa-id="legal-ending"]');
        this.legalEndingOption = this.legalEnding.find('option');
        this.industry = Selector('[data-qa-id="industry"]');
        this.industryOption = this.industry.find('option');
        this.serviceDescription = Selector('[name="serviceDescription"]');

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

    getServiceDescription() {
        return this.serviceDescription.value;
    }
}