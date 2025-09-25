import { expect, Locator, Page } from '@playwright/test'

export class TyposPage {
    private typosMessage: Locator

    constructor(page: Page) {
        this.typosMessage = page.getByText('Sometimes you\'ll see a typo,')
    }

    async validateTyposMessage(): Promise<void> {
        await expect(this.typosMessage).toHaveText("  Sometimes you'll see a typo, other times you won't.")
    }
}