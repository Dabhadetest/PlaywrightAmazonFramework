class AmazonHomePage {

    constructor(page) {
        this.page = page;
        this.searchBox = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
    }

    async searchProduct(productName) {
        await this.page.fill(this.searchBox, productName);
        await this.page.click(this.searchButton);
    }
}

module.exports = AmazonHomePage;