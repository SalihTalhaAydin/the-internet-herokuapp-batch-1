import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    mainTitleLocator: Locator
    homePageContentLinks: Locator

    constructor(page: Page) {
        this.mainTitleLocator = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.homePageContentLinks = page.locator("div[id='content'] ul li") // 44 
    }

    async validateMainTitle(): Promise<void> {
        await expect(this.mainTitleLocator).toHaveText('Welcome to the-internet')
    }

    async clickOnLink(linkName: string): Promise<void> {
        // linkName = 'dropdown', 'input', etc...
        await this.homePageContentLinks.getByText(linkName).click()
    }
}