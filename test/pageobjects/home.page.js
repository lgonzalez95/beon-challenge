import BasePage from "./base.page.js";
import { Key } from 'webdriverio';

class HomePage extends BasePage {
    open() {
        return super.open('/');
    }

    get inputSearch() {
        return $('[name="q"]');
    }

    async performSearch(searchKeyword) {
        await super.setValue(this.inputSearch, searchKeyword);
        await browser.keys(Key.Enter);
    }
}

export default new HomePage();