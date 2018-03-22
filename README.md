
# TestCafe Installation

* Install `node.js' (prerequisite)
* Checkout project from Github
* Open command prompt from checkout directory and execute `npm install`
* Execute `npm install -g gulp-cli` 

# How to Access Dynamodb From Testcafe Tests

* Open test/utils/aws.config.json file and enter `accessKeyId` and `secretAccessKey` (AWS credentials)

Please find sample code below to retrieve email from dynamodb: 

`import Page from '../pageobjects/signup.page';
import doCall from '../utils/dynamodb'
import {path} from 'ramda';`

`const page = new Page();`

`const getEmail = path(['Item', 'userDetails', 'email']);`

`fixture 'SignUp Page'`
    `.page 'https://www.qa.sup.rangleapp.io/ca/en/business-type-information';`

`test('sole proprietorship', async t => {`

    `const email = await doCall('00uckw6i80r5sRvli0h7', getEmail);`

    `await t        
        .click(page.soleProprietorship)
        .expect(email).eql('adam.sullovey@rangle.io')`

`});`

In the above example, Item will be default. 'userdetails' and 'email' are attributes

         