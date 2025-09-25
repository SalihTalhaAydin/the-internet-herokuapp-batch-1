import { test } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { StatusCodePage } from '../pages/statusCode'

test('Homepage main title validation', async ({ page }) => {
    //go to internet heroku
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    let statusCodePage = new StatusCodePage(page)
    await homePage.clickOnLink('Status Codes')
    await statusCodePage.validateStatusCodeMessage()
})