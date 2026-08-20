import test, { expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import credentials from '../utilities/testData.json';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
});

test('login test', async ({ page }) => {

    //await page.goto('https://www.demoblaze.com/index.html');

    for (let i of credentials.users) {
        const loginpageObj = new LoginPage(page);

        await loginpageObj.login(i.username, i.password);
        expect(page.locator("//a[@id='logout2']")).toHaveText("Log out");
        await page.locator("//a[@id='logout2']").click();

    }
});
test("AboutUsTC", async ({ page }) => {

    //await page.goto('https://www.demoblaze.com/index.html');
    console.log("This is About us tc under execution");
    await page.locator("//a[text()='About us']").clickkk();


});

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status === "failed") {
        const now = new Date();

        const timestamp = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}-${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;

        await page.screenshot({
            path: `screenshots/${testInfo.title}-${timestamp}.png`,
            fullPage: true
        }

        )
    }

});
