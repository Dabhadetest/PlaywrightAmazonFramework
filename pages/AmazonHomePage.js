class AmazonHomePage {

    constructor(page) {
        this.page = page;
        this.searchBox = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
        this.searchResults = '[data-component-type="s-search-result"]';
		this.addToCartButton = 'input[name="submit.add-to-cart"]';
    }

    async searchProduct(product) {

        await this.page.fill(this.searchBox, product);

        await this.page.click(this.searchButton);

        await this.page.waitForSelector(
            this.searchResults,
            { timeout: 30000 }
        );

        const resultCount = await this.page
            .locator(this.searchResults)
            .count();

        console.log('Search Results Found = ' + resultCount);
    }
}

module.exports = AmazonHomePage;