import { test } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { TyposPage } from '../pages/typosPage'

test('Homepage main title validation', async ({ page }) => {
    //go to internet heroku

    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    let typosPage = new TyposPage(page)
    await homePage.clickOnLink('Typos')
    await typosPage.validateTyposMessage()
})