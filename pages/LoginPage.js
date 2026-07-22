const { expect } = require('@playwright/test');

// Define a class called LoginPage.
// In the Page Object Model (POM), every page of the application
// gets its own class containing all the actions and locators
// related to that page.
class LoginPage {

    // The constructor runs automatically whenever a new LoginPage
    // object is created.
    //
    // Playwright provides a 'page' object which represents the
    // currently open browser tab.
    //
    // Example:
    // const loginPage = new LoginPage(page);
    //
    // That 'page' object is passed into this constructor.
    constructor(page) {

        // Save the Playwright page object so every method in this
        // class can access the browser.
        this.page = page;

        //----------------------------------------------------------
        // LOCATORS
        //----------------------------------------------------------
        // A locator tells Playwright how to find an element.
        //
        // Instead of repeatedly searching for an element throughout
        // our code, we define it once here and reuse it.
        //----------------------------------------------------------

        // Locate the email input field.
        //
        // CSS selector explanation:
        // input = HTML input element
        // [type="email"] = where type equals "email"
        this.emailInput = page.locator('input[type="email"]');

        // Locate the password input field.
        this.passwordInput = page.locator('input[type="password"]');

        // Locate the Sign In button.
        //
        // getByRole() is Playwright's preferred locator strategy.
        // It searches using accessibility roles, making tests
        // more reliable and easier to maintain.
        //
        // /sign in/i is a regular expression.
        //
        // The "i" means ignore capitalisation.
        //
        // Therefore these all match:
        //
        // Sign In
        // SIGN IN
        // sign in
        //
        this.signInButton = page.getByRole('button', {
            name: /sign in/i
        });
    }

    //----------------------------------------------------------
    // Navigate to the BrightHR login page
    //----------------------------------------------------------

    async navigate() {

        // page.goto() opens a webpage.
        //
        // Because opening a website takes time,
        // Playwright returns a Promise.
        //
        // We therefore use "await" so the code waits
        // until navigation has completed.
        await this.page.goto('https://sandbox-app.brighthr.com/lite');
    }

    //----------------------------------------------------------
    // Login method
    //----------------------------------------------------------

    // This method accepts two values:
    //
    // email
    // password
    //
    // Rather than hardcoding credentials into our page,
    // we pass them in so this method can be reused for
    // different users.
    async login(email, password) {

        // Fill the email textbox.
        //
        // Playwright automatically clears the textbox
        // before typing.
        await this.emailInput.fill(email);

        // Fill the password textbox.
        await this.passwordInput.fill(password);

        // Click the Sign In button.
        //
        // Playwright automatically waits until
        // the button is visible and clickable.
        await this.signInButton.click();

    }

}

// Export the LoginPage class so other files can use it.
//
// Example:
//
// const LoginPage = require('../pages/LoginPage');
//
module.exports = LoginPage;