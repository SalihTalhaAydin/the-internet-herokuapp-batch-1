import { test } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { NotificationsPage } from '../pages/notifacationsPage'

// initialize page copies to be used in tests
let homePage: HomePage
let notificationsPage: NotificationsPage

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    notificationsPage = new NotificationsPage(page)
    await page.goto('https://the-internet.herokuapp.com/')
    await homePage.clickOnLink('Notification messages')

})

test('Notification message validation', async ({ page }) => {
    await notificationsPage.clickOnClickHereLink()
    await notificationsPage.validateNotificationMessage(['Action successful', 'Action unsuccesful, please try again'])
})
