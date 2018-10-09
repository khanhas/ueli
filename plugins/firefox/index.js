// @ts-check
/// <reference path="index.d.ts" />

const { join } = require("path");
const { readdirSync, readFile } = require("fs");

const SQL = require("sql.js")
const ICON = "<path d=\"M 16.071 1.28 C 11.959 1.28 8.236 2.969 5.564 5.686 C 5.38 5.286 5.206 4.765 5.096 4.046 C 5.059 3.802 4.885 3.602 4.648 3.53 C 4.412 3.459 4.156 3.53 3.99 3.713 C 3.001 4.803 2.619 6.302 2.439 7.522 C 2.277 8.619 2.309 9.329 2.314 9.502 C 1.661 10.456 1.217 11.187 0.976 11.73 C 0.717 12.313 0.64 12.771 0.64 13.132 C 0.64 13.393 0.655 13.56 0.683 13.698 C 0.696 13.766 0.712 13.829 0.741 13.896 C 0.756 13.93 0.773 13.964 0.796 14 C 0.819 14.036 0.886 14.112 0.886 14.112 C 0.97 14.195 1.074 14.254 1.189 14.281 C 1.035 14.95 0.875 15.724 0.875 16.662 C 0.875 19.549 2.154 23.021 4.68 25.82 C 7.206 28.619 11.016 30.72 15.991 30.72 C 21.982 30.72 25.893 27.389 28.214 23.71 C 30.534 20.031 31.36 16.068 31.36 14.251 C 31.36 13.06 31.147 12.18 31.088 11.93 C 31.012 11.614 30.711 11.404 30.388 11.444 C 30.316 10.899 30.341 10.531 30.2 9.93 C 29.855 8.464 29.299 6.935 28.258 5.91 C 28.105 5.761 27.888 5.697 27.679 5.74 C 27.47 5.784 27.297 5.928 27.216 6.126 C 26.943 5.821 26.757 5.503 26.39 5.22 C 26.058 4.964 25.68 4.726 25.265 4.506 C 25.236 4.474 25.203 4.445 25.168 4.419 C 22.664 2.453 19.5 1.28 16.071 1.28 Z  M 16.071 2.56 C 17.578 2.56 19.024 2.812 20.375 3.268 C 20.018 3.245 19.652 3.23 19.266 3.229 L 19.265 3.229 C 18.915 3.233 18.633 3.518 18.633 3.868 C 18.632 4.218 18.913 4.503 19.263 4.509 L 19.265 4.509 C 19.27 4.509 19.272 4.511 19.278 4.511 C 20.001 4.514 20.604 4.743 21.076 5.023 C 20.881 5.065 20.66 5.102 20.52 5.151 C 20.271 5.239 20.102 5.471 20.093 5.735 C 20.085 5.999 20.24 6.24 20.483 6.344 C 21.94 6.964 23.418 7.696 24.429 8.542 C 25.013 9.032 25.37 9.541 25.586 10.08 C 25.45 10.036 25.354 9.928 25.17 9.94 C 24.956 9.954 24.763 10.074 24.656 10.26 C 24.549 10.446 24.543 10.673 24.639 10.865 C 25.122 11.83 25.148 13.065 25.033 14.345 C 25.021 14.331 24.953 14.236 24.953 14.236 C 24.764 14.019 24.454 13.954 24.194 14.078 C 23.935 14.202 23.789 14.483 23.839 14.766 C 23.839 14.766 24.032 15.885 23.938 17.295 C 23.9 17.852 23.765 18.442 23.611 19.019 C 23.473 18.892 23.285 18.833 23.099 18.856 C 22.913 18.88 22.746 18.984 22.644 19.141 C 22.644 19.141 22.035 20.071 21.045 21.004 C 20.055 21.937 18.719 22.809 17.358 22.809 C 15.488 22.809 14.347 22.232 13.498 21.635 C 14.431 21.48 15.273 21.228 15.894 20.889 C 16.386 20.62 16.775 20.339 17.054 20.116 C 17.193 20.005 17.305 19.909 17.385 19.838 C 17.465 19.766 17.565 19.689 17.481 19.749 L 17.481 19.75 C 17.627 19.645 17.66 19.645 17.66 19.645 C 17.66 19.645 17.702 19.642 17.869 19.688 C 18.221 19.783 18.499 19.686 18.741 19.519 C 18.984 19.351 19.205 19.039 19.205 18.655 C 19.205 18.329 19.08 18.108 18.93 17.895 C 18.78 17.682 18.584 17.485 18.343 17.306 C 17.86 16.949 17.187 16.67 16.39 16.67 L 16.389 16.67 C 15.499 16.67 14.903 17.033 14.511 17.291 C 14.12 17.55 13.935 17.7 13.353 17.7 C 12.929 17.7 12.165 17.262 11.573 16.726 C 11.276 16.458 11.017 16.179 10.835 15.964 C 10.767 15.884 10.723 15.827 10.68 15.77 C 10.69 15.704 10.689 15.64 10.714 15.589 C 10.752 15.509 10.805 15.478 10.939 15.446 C 11.392 15.522 11.809 15.603 12.121 15.669 C 12.474 15.743 12.658 15.805 12.939 15.818 C 13.259 15.831 13.54 15.606 13.596 15.291 C 13.722 14.586 13.596 13.948 13.436 13.468 C 13.358 13.232 13.32 13.193 13.243 13.032 C 13.438 12.853 13.651 12.656 13.949 12.444 C 14.361 12.15 14.68 11.95 14.831 11.845 C 14.832 11.845 14.832 11.844 14.833 11.844 C 15.078 11.672 15.236 11.466 15.373 11.24 C 15.509 11.014 15.633 10.798 15.633 10.442 C 15.633 10.105 15.41 9.817 15.241 9.699 C 15.072 9.581 14.901 9.545 14.901 9.545 C 14.863 9.536 14.823 9.531 14.784 9.53 C 14.784 9.53 14.465 9.517 13.934 9.472 L 13.933 9.472 C 12.99 9.393 13.242 9.407 12.701 8.929 C 12.701 8.928 12.701 8.928 12.701 8.928 C 12.492 8.743 12.229 8.447 12.031 8.23 C 12.055 8.137 12.036 8.115 12.203 7.798 C 12.461 7.305 12.962 6.571 13.938 5.69 C 14.134 5.513 14.201 5.232 14.106 4.985 C 14.011 4.738 13.773 4.575 13.509 4.575 C 12.419 4.575 11.384 5.14 10.564 5.66 C 9.887 6.089 9.557 6.381 9.393 6.519 C 9.154 6.432 8.954 6.311 8.351 6.311 C 7.441 6.311 6.836 6.479 6.438 6.622 C 8.88 4.118 12.289 2.56 16.071 2.56 Z  M 22.924 4.99 C 24.059 5.306 24.96 5.734 25.609 6.234 C 26.829 7.173 27.357 8.302 27.618 9.146 C 27.684 9.36 27.859 9.524 28.077 9.577 C 28.295 9.63 28.524 9.565 28.683 9.406 C 28.769 9.684 28.887 9.94 28.954 10.224 C 29.27 11.569 29.376 12.92 29.376 13.62 C 29.376 13.8 29.453 13.972 29.587 14.094 C 29.72 14.215 29.899 14.274 30.079 14.256 C 30.078 15.648 29.295 19.595 27.131 23.026 C 24.966 26.46 21.514 29.44 15.991 29.44 C 11.373 29.44 7.944 27.526 5.63 24.962 C 3.316 22.399 2.155 19.162 2.155 16.662 C 2.155 14.758 2.788 13.245 2.788 13.245 C 2.876 13.034 2.845 12.793 2.707 12.611 C 2.569 12.429 2.344 12.334 2.118 12.362 C 2.138 12.311 2.12 12.309 2.146 12.25 C 2.351 11.788 2.747 11.1 3.466 10.065 C 3.546 9.95 3.586 9.813 3.58 9.674 C 3.58 9.674 3.543 8.805 3.705 7.71 C 3.798 7.078 3.992 6.415 4.249 5.795 C 4.426 6.269 4.622 6.669 4.825 6.978 C 4.871 7.113 4.962 7.229 5.083 7.308 C 5.493 7.773 5.906 7.986 5.906 7.986 C 6.082 8.063 6.283 8.057 6.454 7.97 C 6.454 7.97 7.188 7.591 8.351 7.591 C 8.937 7.591 9.286 7.762 9.286 7.762 C 9.517 7.872 9.79 7.835 9.983 7.668 C 9.983 7.668 10.516 7.204 11.249 6.74 C 11.308 6.703 11.378 6.678 11.439 6.641 C 11.316 6.829 11.153 7.041 11.069 7.202 C 10.736 7.837 10.665 8.319 10.665 8.319 C 10.643 8.5 10.7 8.682 10.821 8.819 C 10.821 8.819 11.415 9.5 11.854 9.888 C 12.327 10.306 12.746 10.657 13.826 10.748 C 14.007 10.763 13.989 10.759 14.121 10.768 C 14.117 10.771 14.1 10.794 14.099 10.795 C 14.112 10.786 13.649 11.084 13.205 11.401 C 12.761 11.718 12.287 12.058 11.965 12.468 C 11.812 12.662 11.785 12.928 11.896 13.15 C 11.986 13.33 12.106 13.524 12.221 13.871 C 12.272 14.024 12.245 14.22 12.271 14.396 C 11.924 14.323 11.504 14.235 10.988 14.154 C 10.923 14.143 10.857 14.143 10.793 14.152 C 10.185 14.243 9.744 14.652 9.56 15.036 C 9.376 15.42 9.371 15.766 9.371 15.921 C 9.371 15.98 9.379 16.038 9.395 16.095 C 9.441 16.258 9.469 16.27 9.498 16.316 C 9.526 16.363 9.556 16.407 9.591 16.455 C 9.661 16.551 9.749 16.663 9.858 16.791 C 10.074 17.047 10.367 17.362 10.714 17.675 C 11.407 18.302 12.288 18.98 13.353 18.98 C 14.235 18.98 14.827 18.617 15.216 18.36 C 15.606 18.103 15.796 17.95 16.39 17.95 C 16.886 17.95 17.3 18.127 17.581 18.335 C 17.609 18.356 17.616 18.373 17.641 18.394 C 17.584 18.394 17.543 18.369 17.483 18.378 C 17.206 18.416 16.964 18.546 16.736 18.709 C 16.736 18.709 16.735 18.71 16.735 18.71 C 16.608 18.801 16.609 18.815 16.538 18.879 C 16.466 18.942 16.372 19.023 16.255 19.116 C 16.021 19.304 15.692 19.54 15.28 19.765 C 14.456 20.215 13.308 20.616 11.869 20.499 C 11.598 20.477 11.342 20.628 11.232 20.876 C 11.121 21.125 11.18 21.416 11.378 21.602 C 11.871 22.069 13.877 24.089 17.358 24.089 C 19.239 24.089 20.814 22.981 21.924 21.935 C 22.132 21.739 22.083 21.731 22.26 21.541 C 22.253 21.559 22.261 21.573 22.254 21.59 C 22.14 21.871 22.239 22.194 22.491 22.363 C 22.744 22.531 23.08 22.499 23.296 22.286 C 24.695 20.906 25.11 18.954 25.215 17.381 C 25.223 17.263 25.202 17.283 25.206 17.169 C 25.376 17.219 25.558 17.196 25.711 17.107 C 25.863 17.018 25.972 16.87 26.011 16.698 C 26.35 15.21 26.569 13.585 26.321 12.061 C 26.67 12.115 26.997 11.876 27.051 11.528 C 27.297 9.918 26.446 8.563 25.25 7.561 C 24.588 7.007 23.808 6.54 22.993 6.115 C 23.198 5.949 23.28 5.674 23.2 5.423 C 23.145 5.25 23.023 5.126 22.924 4.99 Z\"/>";
let profileName = "";

module.exports.runSearcher = class Searcher {
    constructor() {
        this.needSort = true;
        this.shouldIsolate = false;

        let databasePath = join(process.env.APPDATA, "Mozilla/Firefox/Profiles/");

        if (!profileName) {
            const profileFolders = readdirSync(databasePath);
            if (!profileFolders[0]) {
                return;
            }
            profileName = profileFolders[0];
        }

        databasePath = join(databasePath, profileName, "places.sqlite");

        this.items = [];
        readFile(databasePath, (error, fileBuffer) => {
            if (error) {
                return;
            }

            const db = new SQL.Database(fileBuffer);

            const results = db.exec(`
                SELECT prefix, host
                FROM moz_origins
                WHERE prefix LIKE 'http%'
                    AND frecency > 0
                GROUP BY host
            `);

            const places = db.exec(`
                SELECT url, title
                FROM moz_places
                WHERE frecency > 0
            `);

            if (!results[0]
             && !results[0].values
             && results.values.length === 0) {
                return;
            }

            if (!places[0]
             && !places[0].values
             && places.values.length === 0) {
                return;
            }

            (async () => {
                const placesObj = {};
                places[0].values.forEach((/**@type {[string, string]} */ row) => {
                    placesObj[row[0]] = row;
                })


                results[0].values.forEach((/**@type {[string, string]} */row) => {
                    const url = `${row[0]}${row[1]}/`;
                    this.items.push({
                        executionArgument: url,
                        icon: ICON,
                        name: (placesObj[url] && placesObj[url][1]) || row[1],
                    });
                });
            })();
        });
    }

    /**
     *
     * @param {string} input
     * @returns {Promise<Array<SearchResultItem>>}
     */
    async getSearchResult(input) {
        if (input.length == 0) {
            return [];
        }

        return this.items;
    }
}

module.exports.inputValidator = class Validator {
    /**
     *
     * @param {string} input
     * @returns {boolean}
     */
    isValidForSearchResults(input) {
        return true;
    }
}