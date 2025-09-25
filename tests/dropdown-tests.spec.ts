import { test } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { DropDownPage } from '../pages/dropdownPage'

// initialize page copies to be used in tests
let homePage: HomePage
let dropdownPage: DropDownPage

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    dropdownPage = new DropDownPage(page)
    await page.goto('https://the-internet.herokuapp.com/')
    await homePage.clickOnLink('Dropdown')
})

test('Dropdown option 1 selection validation', async ({ page }) => {
    await dropdownPage.selectOption('Option 1')
    await dropdownPage.validateSelectedOptionValue('1') // passed
})

test('Dropdown option 2 selection validation', async ({ page }) => {
    await dropdownPage.selectOption('Option 2')
    await dropdownPage.validateSelectedOptionValue('2') // passed
})

