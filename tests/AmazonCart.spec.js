const { test, expect } = require('@playwright/test');

const AmazonHomePage = require('../pages/AmazonHomePage');
const ProductPage = require('../pages/ProductPage');

test('Search Product and Add To Cart', async ({ page }) => {

    const homePage = new AmazonHomePage(page);
    const productPage = new ProductPage(page);

    await page.goto('https://www.amazon.in');

    await homePage.searchProduct('iPhone 15');

    await productPage.clickFirstProduct();

    await page.waitForLoadState('networkidle');

    const price = await productPage.getPrice();

    console.log('Product Price = ₹' + price);

    await productPage.addToCart();

    await expect(
        page.locator('#nav-cart-count')
    ).toContainText('1');
});