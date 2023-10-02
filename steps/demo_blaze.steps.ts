import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../steps/world'
import { expect } from '@playwright/test'

Given('I am on {string} page', async (expectedText) =>  {
    // Write code here that turns the phrase above into concrete actions
    const actualText  = await page.locator(`a[id='nava']`).textContent();
    expect(expectedText).toEqual(actualText!.trim());
  });

When('I click categories link', async () => {
    // Write code here that turns the phrase above into concrete actions
    await page.locator(`//div[@class='list-group']//a[1]`).click();
  });

  Then('I see {string}, {string} and {string} under categories', async (string, string2, string3) =>  {
    // Write code here that turns the phrase above into concrete actions
    const actualSubLinks = await page.locator(`//div[@class='list-group']//a[not(@id='cat')]`).allTextContents();
    const expectedSubLinks = [string, string2, string3];
    expect(actualSubLinks).toEqual(expectedSubLinks);;
  });


Then('I see {string} in display', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('I see {string} in display', async (actualProduct) => {
    // Write code here that turns the phrase above into concrete actions
    const product = page.locator(`//h4[@class='card-title']//a[text()='${actualProduct}']`);
    await expect(product).toBeEnabled();
    expect(product).toBeTruthy();
  });