const {Builder, By, Key,util} = require("selenium-webdriver");
async function testing() {
    let driver = await new Builder().forBrowser("firefox").build();
    try {
        await driver.get("https://www.way2automation.com/angularjs-protractor/webtables/");
        await driver.findElement(By.css("body > table > thead > tr:nth-child(2) > td > button")).click();
        await driver.findElement(By.name("FirstName")).sendKeys("Anthony");
        await driver.findElement(By.name("LastName")).sendKeys("Omotola");
        await driver.findElement(By.name("UserName")).sendKeys("Chapter414");
        await driver.findElement(By.name("Password")).sendKeys("Alpha@2020");
        await driver.findElement(By.name("optionsRadios")).value("15").click();
        await driver.findElement(By.css("body > div.modal.ng-scope > div.modal-body > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > select").value("Customer"));
        await driver.findElement(By.name("Email")).sendKeys("chapter414@gmail.com");
        await driver.findElement(By.name("Mobilephone")).sendKeys("0732465898");
        await driver.findElement(By.className("btn btn-success")).click();
    } catch (error) {
        console.log(error);
    }
}
testing();