import Page from '../pageobjects/signup-page';
import BasePage from '../pageobjects/base-page';
import TestData from '../utils/constants';
import Assertions from '../utils/assertions';

const page = new Page();
const basePage = new BasePage();

fixture `My fixture`
    .page `${basePage.qaUrl}/business-type-information`;

test('Signup sole proprietorship', async t => {
    await t
        .click(page.soleProprietorship)
        .typeText(page.firstName, TestData.First_Name)
        .typeText(page.lastName, TestData.Last_Name)
        .typeText(page.email, TestData.Email)
        .typeText(page.password, TestData.Password)
        .click(basePage.next)
        .click(page.consentIAgree)
        .click(basePage.next)
        .expect(page.verifyEmailText.innerText).eql(Assertions.Signup_Welcome_Message)
});