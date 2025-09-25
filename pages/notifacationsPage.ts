import { Locator, Page } from "@playwright/test";

export class NotificationsPage {
    private notificationMessage: Locator
    private clickHereLink: Locator

    constructor(page: Page) {

        this.notificationMessage = page.locator('.notification')
        this.clickHereLink = page.getByRole('link', { name: 'Click here' })
    }

    async clickOnClickHereLink(): Promise<void> {
        await this.clickHereLink.click()
    }

    async validateNotificationMessage(expectedMessages: string[]): Promise<void> {
        const actualMessage = await this.notificationMessage.textContent()
        console.log('Actual message:', actualMessage)
        console.log('Expected messages:', expectedMessages)
    }
}