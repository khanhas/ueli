// @ts-check

const fetch = require("node-fetch").default;
const cheerio = require("cheerio");

const PREFIX = "dd!"

module.exports.onlineSearcher = class Searcher {
    constructor() {
        this.needSort = false;
        this.shouldIsolate = true;
    }

    /**
     *
     * @param {string} userInput
     * @returns {Promise<Array<{ name: string;tags?: string[]; alternativeExecutionArgument?: string; alternativePrefix?: string; breadCrumb?: string[]; executionArgument: string; icon: string}>>}
     */
    async getSearchResult(userInput) {
        const input = userInput.replace(PREFIX, "");
        return fetch(`https://duckduckgo.com/lite/?q=${encodeURIComponent(input)}`)
            .then((res) => res.text())
            .then((res) => {
                const $ = cheerio.load(res);
                const rawResults = $("tr");
                const headers = rawResults.find("a");
                const descriptions = rawResults.find(".result-snippet");
                const results = [];
                for (let i = 0; i < headers.length; i++) {
                    results.push({
                        breadCrumb: [$(descriptions[i]).text()],
                        executionArgument: this.toLink($(headers[i])),
                        icon: "getURLIcon",
                        name: $(headers[i]).text(),
                    })
                }
                return results;
            });
    }

    /**
     *
     * @param {Cheerio} element
     * @returns {string}
     */
    toLink(element) {
        const rawLink = element.attr("href").substr(15); // /l/?kh=-1&uddg=
        return decodeURIComponent(rawLink);
    }
}

module.exports.inputValidator = class Validator {
    /**
     *
     * @param {string} input
     * @returns {boolean} whether input is valid to start to get search results
     */
    isValidForSearchResults(input) {
        return input.startsWith(PREFIX);
    }

    /**
     *
     * @param {string} userInput
     * @returns {[string, string, string]}
     */
    getScopes(userInput) {
        const trimmed = userInput.substr(PREFIX.length);
        return [PREFIX, trimmed, "DuckDuckGo"];
    }
}
