// Import Playwright's test runner and assertion library.
import { test, expect } from '@playwright/test';
import { employee1, employee2 } from '../fixtures/employees';

// Define a Playwright test called "test".
test('Add two employees and verify they are displayed and then deleted', async ({ page }) => {

  // Open the BrightHR Lite homepage.
  await page.goto('https://sandbox-app.brighthr.com/lite');

  // Verify the Log in link is visible.
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

  // Click the Log in link.
  await page.getByRole('link', { name: 'Log in' }).click();

  // Verify the Email Address field is displayed.
  await expect(page.getByText('Email address')).toBeVisible();

  // Enter the email address.
  await page.getByLabel('Email').fill(process.env.USERNAME);

  // Verify the Password label is visible.
  await expect(page.getByText('Password', { exact: true })).toBeVisible();

  // Enter the password.
  await page.getByLabel('Password').fill(process.env.PASSWORD);

  // Verify the login form has fully loaded.
  await expect(page.getByText('I\'m using a public or shared')).toBeVisible();

  // Verify the Login button is visible.
  await expect(page.getByTestId('login-button')).toBeVisible();

  // Click the Login button.
  await page.getByTestId('login-button').click();

  // // Wait until login has completed successfully..
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

   // Verify the dashboard has loaded successfully.
  await expect(page.getByRole('img', { name: 'BrightSafe Farming LTD advert' })).toBeVisible();

   // Verify the Employees menu is displayed.
  await expect(page.getByTestId('sideBar').getByRole('link', { name: 'Employees' })).toBeVisible();

  // Open the Employees page.
  await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();

  // Verify the Add Employee button is visible.
  await expect(page.getByRole('button', { name: 'Add employee' })).toBeVisible();

  // Click Add Employee.
  await page.getByRole('button', { name: 'Add employee' }).click();

  // Verify the First Name field is visible.
  await expect(page.getByText('First name')).toBeVisible();

  // Enter the first employee's first name.
  await page.getByRole('textbox', { name: 'First name' }).fill(employee1.firstName);

  // Verify the Last Name field is visible.
  await expect(page.getByText('Last name')).toBeVisible();

  // Click & Enter the last name.
  await page.getByRole('textbox', { name: 'Last name' }).fill(employee1.lastName);

  // Verify the Email Address field is visible.
  await expect(page.getByText('Email address')).toBeVisible();

  // Enter the employee's email address.
  await page.getByRole('textbox', { name: 'Email address' }).fill('willbg16@hotmail.co.uk');

  // Verify the registration email option is displayed.
  await expect(page.getByText('Send registration email')).toBeVisible();

  // Disable the Send Registration Email toggle.
  await page.getByTestId('checkboxLabel').click();

  // Verify the Phone number field is visible.
  await expect(page.getByText('Phone number')).toBeVisible();

  // Enter the employee's phone number.
  await page.getByRole('textbox', { name: 'Phone number (optional)' }).fill('07472341029');

  // Verify the Start Date field is visible.
  await expect(page.getByText('Start date')).toBeVisible();

  // Enter the employee's start date.
  await page.getByRole('textbox', { name: 'Start date (optional)' }).fill('08/08/1995');

  // Verify the Job Title field is visible.
  await expect(page.getByText('Job title')).toBeVisible();

  // Enter the employee's job title.
  await page.getByRole('textbox', { name: 'Job title (optional)' }).fill('qa automation');

  // Verify the Save button is visible.
  await expect(page.getByRole('button', { name: 'Save new employee' })).toBeVisible();

  // Save the new employee.
  await page.getByRole('button', { name: 'Save new employee' }).click();

  // Verify the employee was added successfully.
  await expect(page.getByRole('heading', { name: 'Success! New employee added' })).toBeVisible();

  // Verify the Add Another Employee button is visible.
  await expect(page.getByRole('button', { name: 'Add another employee' })).toBeVisible();

  // Start adding a second employee.
  await page.getByRole('button', { name: 'Add another employee' }).click();

  // Verify the First Name field is visible.
  await expect(page.getByText('First name')).toBeVisible();

  // Enter the second employee's first name.
  await page.getByRole('textbox', { name: 'First name' }).fill(employee2.firstName);

  // Verify the Last Name field is visible.
  await expect(page.getByText('Last name')).toBeVisible();

  // Click &Enter the second employee's last name.
  await page.getByRole('textbox', { name: 'Last name' }).fill(employee2.lastName);

  // Verify the Email field is visible.
  await expect(page.getByText('Email address')).toBeVisible();

  // Enter the second employee's email.
  await page.getByRole('textbox', { name: 'Email address' }).fill('willbg17@gmail.com');

  // Disable the registration email.
  await page.getByTestId('checkboxLabel').click();

  // Verify the Phone Number field is visible.
  await expect(page.getByText('Phone number')).toBeVisible();

  // Enter the second employee's phone number.
  await page.getByRole('textbox', { name: 'Phone number (optional)' }).fill('07472341029');

  // Verify the Start Date field is visible.
  await expect(page.getByText('Start date')).toBeVisible();

  // Click the Start Date field.
  await page.getByRole('textbox', { name: 'Start date (optional)' }).click();

  // Enter the second employee's start date.
  await page.getByRole('textbox', { name: 'Start date (optional)' }).fill('09/08/1995');

  // Verify the Job Title field is visible.
  await expect(page.getByText('Job title')).toBeVisible();

  // Enter the second employee's job title.
  await page.getByRole('textbox', { name: 'Job title (optional)' }).fill('qa automation 2');

  // Verify the Save button is visible.
  await expect(page.getByRole('button', { name: 'Save new employee' })).toBeVisible();

  // Save the second employee.
  await page.getByRole('button', { name: 'Save new employee' }).click();

  // Verify the success message is displayed.
  await expect(page.getByRole('heading', { name: 'Success! New employee added' })).toBeVisible();

  // Verify the Close button is visible.
  await expect(page.getByRole('button', { name: 'Close modal' })).toBeVisible();

  // Close the success dialog.
  await page.getByRole('button', { name: 'Close modal' }).click();

  // Navigate directly to the Employee Hub.
  await page.goto('https://sandbox-app.brighthr.com/employee-hub');

  // Wait for the page to finish loading.
  await expect(page.getByRole('heading', { name: 'Employee hub' })).toBeVisible();

  // Verify the employee search box is visible.
  await expect(page.getByPlaceholder('Name or job title...')).toBeVisible();

  // Search for the employees.
  await page.getByPlaceholder('Name or job title...').fill('beresford-grindrod');

  // Verify the second employee appears in the results.
  await expect(page.getByRole('heading', { name: 'bill beresford-grindrod' })).toBeVisible();

  // Verify the first employee appears in the results.
  await expect(page.getByRole('heading', { name: 'william Beresford-grindrod' })).toBeVisible();

  // Open the first employee's options menu.
  await page.getByTestId('EditButton').first().click();

  // Verify the Delete Employee option is visible.
  await expect(page.getByRole('link', { name: 'Delete employee record' })).toBeVisible();

  // Select Delete Employee.
  await page.getByRole('link', { name: 'Delete employee record' }).click();

  // Verify the correct employee is selected.
  await expect(page.getByText('bill beresford-grindrod')).toBeVisible();

  // Tick the confirmation checkbox.
  await page.getByTestId('checkboxLabel').click();

  // Verify the Delete button is enabled and visible.
  await expect(page.getByRole('button', { name: 'Delete bill' })).toBeVisible();

  // Confirm deletion.
  await page.getByRole('button', { name: 'Delete bill' }).click();

  // Verify the employee was deleted successfully.
  await expect(page.getByText('You have succesfully deleted')).toBeVisible();

  // Verify the Return button is visible.
  await expect(page.getByRole('button', { name: 'Return to employee hub' })).toBeVisible();

  // Return to the Employee Hub.
  await page.getByRole('button', { name: 'Return to employee hub' }).click();

  // Verify the search box is displayed.
  await expect(page.getByPlaceholder('Name or job title...')).toBeVisible();

  // Wait for the page to settle.
  await page.waitForTimeout(2000);

  // Search for the remaining employee.
  await page.getByPlaceholder('Name or job title...').fill('beresford');

  // Wait for search results.
  await page.waitForTimeout(2000);

  // Verify the remaining employee is displayed.
  await expect(page.getByRole('heading', { name: 'william Beresford-grindrod' })).toBeVisible();

  // Wait before opening the menu.
  //await page.waitForTimeout(2000);

  // Verify the Edit button is visible.
  //await expect(page.getByTestId('EditButton')).toBeVisible();

  // Open the employee options.
  await page.getByTestId('EditButton').click();

  // Verify Delete Employee is available.
  await expect(page.getByRole('link', { name: 'Delete employee record' })).toBeVisible();

  // Click Delete Employee.
  await page.getByRole('link', { name: 'Delete employee record' }).click();

  // Wait for the confirmation dialog.
  await expect(page.getByText('I understand this action')).toBeVisible();

  // Tick the confirmation checkbox.
  await page.getByTestId('checkboxLabel').click();

  // Wait for the Delete button to become enabled.
  await page.waitForTimeout(3000);

  // Verify the Delete button is visible.
  await expect(page.getByRole('button', { name: 'Delete william' })).toBeVisible();

  // Confirm deletion.
  await page.getByRole('button', { name: 'Delete william' }).click();

  // Verify the success message is displayed.
  await expect(page.getByText('You have succesfully deleted')).toBeVisible();

  // Verify the Return button is visible.
  await expect(page.getByRole('button', { name: 'Return to employee hub' })).toBeVisible();

  // Return to the Employee Hub.
  await page.goto('https://sandbox-app.brighthr.com/employee-hub');

// Return to the Employee Hub verification.
  await expect(page.getByRole('heading', { name: 'Employee hub' })).toBeVisible();

  // Verify the Logout link is visible.
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

  // Navigate directly to the BrightHR login page.
  await page.getByRole('link', { name: 'Logout' }).click();

  // Verify the Login page is displayed.
  await expect(page.getByRole('heading', { name: 'Login to Bright' })).toBeVisible();
});