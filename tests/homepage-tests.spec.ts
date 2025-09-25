import { test } from '@playwright/test'
import { HomePage } from '../pages/homepage'

test('Homepage main title validation', async ({ page }) => {
    //go to internet heroku
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.validateMainTitle()
})