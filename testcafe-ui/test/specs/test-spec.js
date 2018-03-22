import LoginPage from '../pageobjects/login-page';
import BasePage from '../pageobjects/base-page';
import TestData from '../utils/constants';
import Assertions from '../utils/assertions';
import SearchBusinessNamePage from '../pageobjects/named-incorporation/search-business-name-page';
import DistinctiveElementPage from '../pageobjects/named-incorporation/distinctive-element-page';
import IncorporationBusinessInfo from '../pageobjects/named-incorporation/incorporation-business-info-page';
import { Selector } from 'testcafe';

const basePage = new BasePage();
const loginPage = new LoginPage();
const searchBusinessName = new SearchBusinessNamePage();
const distinctiveElementPage = new DistinctiveElementPage();
const incorporationBusinessInfo = new IncorporationBusinessInfo();

fixture `My fixture`
    .page `${basePage.qaUrl}/login`;

test('Login Incorporation', async t => {
    await loginPage.login(t, 'erick.d+aut@rangle.io','Rangle123');
    await t
        .click(basePage.resetIncorporation)
        .click(basePage.start)
        .click(basePage.next)
        .click(searchBusinessName.businessName)
        .typeText(searchBusinessName.businessName, 'Arepa City')
        .click(searchBusinessName.search)
        .click(basePage.newSearch)
        .expect(searchBusinessName.getTotalSearches(1)).ok()
        .click(searchBusinessName.businessName)
        .typeText(searchBusinessName.businessName, 'Arepa City')
        .click(searchBusinessName.search)
        .click(basePage.nextStep) //Step 1
        .click(basePage.nextStep) //Step 2
        .click(basePage.nextStep) //Step 3
        .click(distinctiveElementPage.nameInitialsNo)
        .click(distinctiveElementPage.geoNameYes)
        .expect(distinctiveElementPage.getBusinessName()).eql('Arepa City')
        .click(basePage.next)
        .click(incorporationBusinessInfo.legalEnding)
        .click(incorporationBusinessInfo.legalEndingOption.withText('Ltd.'))
        .click(incorporationBusinessInfo.industry)
        .click(incorporationBusinessInfo.industryOption.withText('Construction'))
        .typeText(incorporationBusinessInfo.serviceDescription, 'Restaurants')
        .click(basePage.next)
        .click(basePage.back)
        .expect(incorporationBusinessInfo.getServiceDescription()).eql('Restaurants')

});