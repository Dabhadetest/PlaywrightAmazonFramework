class ProductPage {

    constructor(page) {
        this.page = page;

        this.firstProduct = 'a-autoid-1-announce';

        this.price = 'span.a-price-whole';

        this.addToCartButton = '#add-to-cart-button';

        this.cartCount = '#nav-cart-count';
    }

    async clickFirstProduct() {
        await this.page.waitForSelector(this.firstProduct);
        await this.page.locator(this.firstProduct).first().click();
    }

    async getPrice() {
        await this.page.waitForSelector(this.price);
        return await this.page.locator(this.price).first().textContent();
    }

    async addToCart() {
        await this.page.click(this.addToCartButton);
    }

    async getCartCount() {
        return await this.page.locator(this.cartCount).textContent();
    }
}

module.exports = ProductPage;