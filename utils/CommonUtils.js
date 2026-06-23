class CommonUtils {

    static async wait(page, seconds) {
        await page.waitForTimeout(seconds * 1000);
    }

    static async takeScreenshot(page, fileName) {
        await page.screenshot({
            path: `screenshots/${fileName}.png`,
            fullPage: true
        });
    }

    static async scrollToElement(locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    static async getPageTitle(page) {
        return await page.title();
    }

    static async getCurrentURL(page) {
        return page.url();
    }
}

module.exports = CommonUtils;