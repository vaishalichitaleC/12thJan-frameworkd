import { Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginLink:Locator;
    readonly uname:Locator;
    readonly passwd:Locator;
    readonly loginButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink=page.locator("//a[@id='login2']");
        this.uname=page.locator("//input[@id='loginusername']");
        this.passwd=page.locator("//input[@id='loginpassword']");
        this.loginButton=page.locator("//button[text()='Log in']");
    }

    async login(userName:string, password:string) {

        //open URL

        //await this.page.goto('https://www.demoblaze.com/index.html');

        //click on login link

        await this.loginLink.click();

        //username
        await this.uname.fill(userName);

        //password

        await this.passwd.fill(password);

        await this.loginButton.click();

    }

}