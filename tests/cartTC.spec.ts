import test, { expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage'; 
import { CartPage } from '../Pages/cartPage';
import credentials from '../utilities/testData.json';


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
});
test('login test', async ({ page }) => {

    const loginPageObj = new LoginPage(page);
    await loginPageObj.login(credentials.users[0].username, credentials.users[0].password);
    
    const cartPageObj = new CartPage(page);
    await cartPageObj.addToCart();

    //await page.locator("//a[normalize-space()='Cart']").click();

    //await page.waitForURL("**/cart.html");

    //const itemCount = await cartPageObj.getCartItemCount();

    //console.log("Number of items in cart:", itemCount);

   //await cartPageObj.deleteDuplicateItems();
    
    
});