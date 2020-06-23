const {Builder, By, Key,util} = require("selenium-webdriver");
async function testing() {
    let driver = await new Builder().forBrowser("firefox").build();
    try {
        await driver.get("http://www.way2automation.com/angularjs-protractor/webtables/");
        await driver.findElement(By.css("body > table > thead > tr:nth-child(2) > td > button")).click();
        await driver.findElement(By.name("FirstName")).sendKeys("FName1");
        await driver.findElement(By.name("LastName")).sendKeys("LName1");
        await driver.findElement(By.name("UserName")).sendKeys("User1");
        await driver.findElement(By.name("Password")).sendKeys("Pass1");
        await driver.findElement(By.className(ng-valid ng-dirty)).click();
        await driver.findElement(By.css("body > div.modal.ng-scope > div.modal-body > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > select").value("Admin"));
        await driver.findElement(By.name("Email")).sendKeys("admin@mail.com");
        await driver.findElement(By.name("Mobilephone")).sendKeys("082555");
        await driver.findElement(By.className("btn btn-success")).click();
    } catch (error) {
        console.log(error);
    }
}
testing();