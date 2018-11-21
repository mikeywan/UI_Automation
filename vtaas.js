var testData = require('./config.json');
describe('angularjs homepage todo list', function() {
    beforeEach(function(){
        browser.get('https://vtaas.eng.vmware.com');
    });

    it('should add a todo', function() {
        element(by.id('user')).sendKeys('xwan');
        element(by.id('pwd')).sendKeys('We1c0meFr0mOr@c1e!');
        element(by.buttonText('LOGIN')).click();

        var navText = element.all(by.css('nav-text'));
        expect(navText.count()).toEqual(6);
        expect(navText.get(0).getText()).toEqual('Home');

        testData.forEach(function (data){
            console.log(data.username);
            console.log(data.passwordField);
        })
    });
});