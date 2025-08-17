
import { generateRandomNumber } from "../utils/generic-utils.js";
import BasePage from "./base.page.js";

class SearchResultsPage extends BasePage {
    get searchResultsLinks() {
        return $$('//div[@data-async-context="query:cat"]//h3/parent::a');
    }

    get searchResultsParent() {
        return $('#center_col');
    }

    async navigateToRandomResult() {
        const resultLinks = await this.searchResultsLinks;
        const randomLink = resultLinks[generateRandomNumber(resultLinks.length - 1)];
        await super.clickUsingJavascript(randomLink);
    }
}

export default new SearchResultsPage();