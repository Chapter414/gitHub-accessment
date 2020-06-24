/*const {Builder, By} = require("selenium-webdriver");

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
        await driver.findElement(By.name("optionsRadios")).click();
        await driver.findElement(By.css(selected)).click();
        await driver.findElement(By.name("Email")).sendKeys(email);
        await driver.findElement(By.name("Mobilephone")).sendKeys(mobile);
        await driver.findElement(By.className("btn btn-success")).click();
    } catch (error) {
        console.log(error);
    }
}

//createUser("FName1", "LName1", "User1", "Pass1" ,"", "2", "admin@mail.com", "082555");
await createUser("FName2", "LName2", "User2", "Pass2" ,"", "1", "customer@mail.com", "083444");
*/
const {Builder, By} = require("selenium-webdriver");

async function createUsers(users) {
    let driver = await new Builder().forBrowser("firefox").build();
    users.forEach(async function(user) {
        console.log(">>>>> user = " + user.email);
        const selected = `body > div.modal.ng-scope > div.modal-body > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > select > option[value="${user.selectValue}"]`;
        try {
            await driver.get("http://www.way2automation.com/angularjs-protractor/webtables/");
            await driver.findElement(By.css("body > table > thead > tr:nth-child(2) > td > button")).click();
            await driver.findElement(By.name("FirstName")).sendKeys(user.firstname);
            await driver.findElement(By.name("LastName")).sendKeys(user.lastname);
            await driver.findElement(By.name("UserName")).sendKeys(user.username);
            await driver.findElement(By.name("Password")).sendKeys(user.password);
            await driver.findElement(By.name("optionsRadios")).click();
            await driver.findElement(By.css(selected)).click();
            await driver.findElement(By.name("Email")).sendKeys(user.email);
            await driver.findElement(By.name("Mobilephone")).sendKeys(user.mobile);
            await driver.findElement(By.className("btn btn-success")).click();
            await driver.manage().setTimeouts({implicit:5000});
        } catch (error) {
            console.log(error);
        }
    });
}
//createUsers([
//    {firstname: "u2", lastname: "l2", username: "username2", password: "pass2", option: "", selectValue: "2", email: "customer@mail.com", mobile: "083444"},
//]);
 createUsers([
     {firstname: "u1", lastname: "l1", username: "username1", password: "pass1", option: "", selectValue: "1", email: "admin@mail.com", mobile: "082555"},
     {firstname: "u2", lastname: "l2", username: "username2", password: "pass2", option: "", selectValue: "2", email: "customer@mail.com", mobile: "083444"},
 ]);