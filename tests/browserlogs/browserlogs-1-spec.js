var browserLogs = require('protractor-browser-logs');
 
describe('Home page:', function () {
 
  var logs;
 
  beforeEach(function () {
    browser.get('https://angularjs.org/');
    logs = browserLogs(browser);
  });
 
  afterEach(function () {
    return logs.verify();
  });
 
  it('should add a name', function(){
     logs.expect('Started');
     console.log('Started');
     element(by.model('yourName')).sendKeys('Mikey');
     var helloList = element.all(by.xpath("/html/body/div[2]/div[1]/div[2]/div[2]/div/h1"));
     expect(helloList.get(0).getText()).toEqual('Hello Mikey!');
     expect(helloList.count()).toEqual(1);
  });
 
});
