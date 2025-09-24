import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    mainTitleLocator: Locator

    constructor(page: Page) {
        this.mainTitleLocator = page.getByRole('heading', { name: 'Welcome to the-internet' })
    }

    async validateMainTitle(): Promise<void> {
        await expect(this.mainTitleLocator).toHaveText('Welcome to the-internet')
    }
}