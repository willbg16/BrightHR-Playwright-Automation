// Import Playwright's test runner and assertion library.
import { test, expect } from '@playwright/test';
import { employee1, employee2, employee3 } from '../fixtures/employees';

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
  await page.getByRole('textbox', { name: 'First name' }).fill(employee3.firstName);

  // Verify the Last Name field is visible.
  await expect(page.getByText('Last name')).toBeVisible();

  // Click & Enter the last name.
  await page.getByRole('textbox', { name: 'Last name' }).fill(employee3.lastName);

  // Verify the Email Address field is visible.
  await expect(page.getByText('Email address')).toBeVisible();

  // Enter the employee's email address.
  await page.getByRole('textbox', { name: 'Email address' }).fill(employee3.email);

   // Verify the registration email option is displayed.
  await expect(page.getByText('Send registration email')).toBeVisible();

  // Disable the Send Registration Email toggle.
  await page.getByTestId('checkboxLabel').click();

  // Check if check box Email toggle is unchecked.
  await expect(page.getByTestId('checkboxLabel')).not.toBeChecked();

   // Verify the Phone number field is visible.
  await expect(page.getByText('Phone number')).toBeVisible();

  // Enter the employee's phone number.
  await page.getByRole('textbox', { name: 'Phone number (optional)' }).fill(employee3.phone);

  // Verify the Start Date field is visible.
  await expect(page.getByText('Start date')).toBeVisible();

  // Enter the employee's start date.
  await page.getByRole('textbox', { name: 'Start date (optional)' }).fill(employee3.startDate);

  // Verify the Job Title field is visible.
  await expect(page.getByText('Job title')).toBeVisible();

  // Enter the employee's job title.
  await page.getByRole('textbox', { name: 'Job title (optional)' }).fill(employee3.jobTitle);

    const emailField = page.getByRole('textbox', {
  name: 'Email address'
});

await expect(emailField).toHaveClass(/border-error-500/);

  // Verify the Save button is visible.
  await expect(
  page.getByRole('button', { name: 'Save new employee' })).toBeDisabled();
  });