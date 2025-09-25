import { expect, Locator, Page } from '@playwright/test'

export class StatusCodePage {
    private statusCodeMessage200: Locator
    private statusCodeMessage301: Locator
    private statusCodeMessage404: Locator
    private statusCodeMessage500: Locator

    constructor(page: Page) {
        this.statusCodeMessage200 = page.getByRole('link', { name: '200' })
        this.statusCodeMessage301 = page.getByRole('link', { name: '301' })
        this.statusCodeMessage404 = page.getByRole('link', { name: '404' })
        this.statusCodeMessage500 = page.getByRole('link', { name: '500' })
    }

    async validateStatusCodeMessage(): Promise<void> {
        await expect(this.statusCodeMessage200).toHaveText("200")
        await expect(this.statusCodeMessage301).toHaveText("301")
        await expect(this.statusCodeMessage404).toHaveText("404")
        await expect(this.statusCodeMessage500).toHaveText("500")
    }
}