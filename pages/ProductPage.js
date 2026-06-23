class ProductPage {

    constructor(page) {
        this.page = page;

        // First product from search results
        //this.firstProduct = 'a[href*="/dp/"]';

        // Product price
        this.price = '.a-price-whole';

        // Add To Cart button
        this.addToCartButton = 'button[id="a-autoid-1-announce"]';

        // Cart count
        this.cartCount = '#nav-cart-count';
    }

   /* async clickFirstProduct() {

        const products = this.page.locator(this.firstProduct);

        console.log(
            'Products Found =',
            await products.count()
        );

        await products.first().click();
    }*/

    async getPrice() {

        await this.page.waitForSelector(
            this.price,
            { timeout: 30000 }
        );

        return await this.page
            .locator(this.price)
            .first()
            .textContent();
    }

    async addToCart() {

        const addToCartBtn = this.page.locator(
            this.addToCartButton
        );

        await addToCartBtn.scrollIntoViewIfNeeded();

        await addToCartBtn.waitFor({
            state: 'visible',
            timeout: 60000
        });

        await addToCartBtn.click();
    }

    async getCartCount() {

        return await this.page
            .locator(this.cartCount)
            .textContent();
    }
}

module.exports = ProductPage;