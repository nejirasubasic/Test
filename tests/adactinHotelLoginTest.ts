// adactinHotelLoginTest.ts
import { test, expect, chromium } from '@playwright/test';
import AdactinHotelLoginPage from './AdactINHotelPage';

test('AdactIN Hotel Login Test', async () => {
  // Launch the browser in headful mode
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Create an instance of the AdactinHotelLoginPage
  const adactinLoginPage = new AdactinHotelLoginPage(page);

  // Navigate to the login page
  await adactinLoginPage.navigateToLoginPage();

  // Perform login
  await adactinLoginPage.login('nejira000', 'Minimax8237');

  // Check if it navigates to the SearchHotel page
  const currentURL = page.url();
  expect(currentURL).toContain('https://adactinhotelapp.com/SearchHotel.php');

  // Output whether the test passed or failed
  if (currentURL.includes('https://adactinhotelapp.com/SearchHotel.php')) {
    console.log('Test passed!');
  } else {
    console.error('Test failed!');
  }

  // Close the browser
  await browser.close();
});
