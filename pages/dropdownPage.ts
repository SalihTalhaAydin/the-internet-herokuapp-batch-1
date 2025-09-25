import { expect, Locator, Page } from '@playwright/test'

export class DropDownPage {
    private selectDropDown: Locator

    constructor(page: Page) {
        this.selectDropDown = page.locator('#dropdown')
    }

    async selectOption(optionText: string): Promise<void> {
        await this.selectDropDown.selectOption({ label: optionText })
        // choosing by label (visible text)
    }

    async validateSelectedOptionValue(expectedOptionValue: string): Promise<void> {
        await expect(this.selectDropDown).toHaveValue(expectedOptionValue) 
        // this will validate the current select, selected the right option.
    }
}