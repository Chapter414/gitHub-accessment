const {Builder, By} = require("selenium-webdriver");

async function createUser(firstname, lastname, username, password, option, selectValue, email, mobile) {
    let driver = await new Builder().forBrowser("firefox").build();
    const selected = `body > div.modal.ng-scope > div.modal-body > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > select > option[value="${selectValue}"]`;
    try {
        await driver.get("http://www.way2automation.com/angularjs-protractor/webtables/");
        await driver.findElement(By.css("body > table > thead > tr:nth-child(2) > td > button")).click();
        await driver.findElement(By.name("FirstName")).sendKeys(firstname);
        await driver.findElement(By.name("LastName")).sendKeys(lastname);
        await driver.findElement(By.name("UserName")).sendKeys(username);
        await driver.findElement(By.name("Password")).sendKeys(password);
        await driver.findElement(By.css('input[type="radio"][value="'+option+'"]')).click()
        await driver.findElement(By.css(selected)).click();
        await driver.findElement(By.name("Email")).sendKeys(email);
        await driver.findElement(By.name("Mobilephone")).sendKeys(mobile);
        await driver.findElement(By.className("btn btn-success")).click();
    } catch (error) {
        console.log(error);
    }
}

//createUser("FName1", "LName1", "User1", "Pass1" ,"15", "2", "admin@mail.com", "082555");
createUser("FName2", "LName2", "User2", "Pass2" ,"16", "1", "customer@mail.com", "083444");