<template>
    <div id="app">
        <div class="header">
            <div class="brand">
                <router-link to="/">
                    <img
                        src="https://daks2k3a4ib2z.cloudfront.net/59a438062f94ec0001780151/59abf4777ba79400010742be_moms2.png">
                </router-link>
            </div>
            <div class="search-input-wrapper">
                <div class="search-input">
                    <input type="text"
                           placeholder="Search here people or pages..."
                           v-model="searchText"
                           v-on:keyup="searchResultShown=true"
                           v-on:click="searchResultShown=!searchResultShown">
                    <div class="search-icon"></div>
                </div>
                <div class="search-results-wrapper" v-if="searchResultShown">
                    <div class="search-result" v-for="searchResult in filteredSearchResults">
                        <div class="result-image"
                             :style="{ backgroundImage: `url('${searchResult.logoURL}')` }"></div>
                        <div>
                            <div class="result-name">{{searchResult.name}}</div>
                            <div class="result-description">{{searchResult.description}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-profile">
                <div class="user-profile-image"
                     :style="{ backgroundImage: `url('${loggedInUser.imageURL}')` }"></div>
                <div>
                    <div class="user-name">{{loggedInUser.name}}</div>
                    <div class="token-count">{{loggedInUser.tokenCount}} MOM</div>
                </div>
            </div>
        </div>
        <div class="sidebar">
            <router-link to="/">
                <div class="sidebar-icon feed-icon"></div>
            </router-link>
            <router-link to="/congress">
                <div class="sidebar-icon congress-icon"></div>
            </router-link>
            <router-link to="/achievements">
                <div class="sidebar-icon achievement-icon"></div>
            </router-link>
        </div>
        <div class="page-content">
            <router-view/>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                searchResultShown: false,
                searchText: '',
                searchResults: [{
                    logoURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
                    name: 'Roxanna Giffard',
                    description: 'Description'
                }, {
                    logoURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
                    name: 'Christina Taylor',
                    description: 'Description'
                }, {
                    logoURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
                    name: 'Mya Dane',
                    description: 'Description'
                }],
                loggedInUser: {
                    name: 'Julia North',
                    imageURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
                    tokenCount: 100
                }
            }
        },
        computed: {
            filteredSearchResults () {
                if (this.searchText) {
                    return this.searchResults.filter(result => result.name.toLowerCase().includes(this.searchText.toLowerCase()))
                }
                return this.searchResults
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
        color: #888da8;
        background-color: #edf2f6;
        margin: 0;
    }

    .header {
        height: 50px;
        background-color: #3f4257;
        padding-right: 70px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        display: flex;

        .brand {
            display: flex;

            img {
                height: 50px;
                width: 75px;
                padding: 0 12.5px;
                background: white;
            }
        }

        .user-profile {
            display: flex;
            align-items: center;
            margin-left: auto;

            .user-profile-image {
                width: 40px;
                height: 40px;
                border: 1px solid #a0a0a0;
                border-radius: 100%;
                position: relative;
                margin-right: 10px;
                background-size: cover;
                background-color: white;
            }

            .user-name {
                font-weight: 700;
                font-size: 12px;
                color: #fff;
            }

            .token-count {
                font-size: 12px;
                color: #fff;
            }
        }
    }

    .sidebar {
        position: fixed;
        height: calc(100% - 50px);
        width: 75px;
        background-color: #fff;
        box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2);

        a {
            padding: 17.5px 22.5px;
            display: block;
            transition: all .3s ease;

            &.router-link-exact-active, &:hover {
                background-color: #d0d0d0;
            }
        }

        .sidebar-icon {
            background-size: cover;
            width: 30px;
            height: 30px;
        }

        .congress-icon {
            background-image: url('https://cdn1.iconfinder.com/data/icons/hotel-icon-set/64/i623-512.png');
        }

        .feed-icon {
            background-image: url('https://cdn2.iconfinder.com/data/icons/miscellaneous-31/60/newspaper-64.png');
        }

        .achievement-icon {
            background-image: url('https://cdn2.iconfinder.com/data/icons/thin-line-icons-for-seo-and-development-1/64/SEO_favorite-64.png');
        }
    }

    .page-content {
        margin-top: 50px;
        margin-left: 75px;
    }

    .search-input-wrapper {
        margin-left: 100px;

        .search-input {
            background: lighten(#3f4257, 8%);
            display: flex;
        }

        input {
            border: 0;
            background-color: transparent;
            width: 400px;
            padding: 17px 50px 17px 17px;
            color: #aaaecd;

            &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                color: #aaaecd;
            }
            &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: #aaaecd;
                opacity: 1;
            }
            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #aaaecd;
            }
            &::-ms-input-placeholder { /* Microsoft Edge */
                color: #aaaecd;
            }
        }

        .search-icon {
            background: url('https://i.imgur.com/CqDgWm2.png') no-repeat center center;
            width: 50px;
            height: 50px;
            position: relative;
            margin-left: -50px;
            padding: 13px;
        }
    }

    .search-results-wrapper {
        padding: 0;
        background-color: white;
        box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);

        .search-result {
            display: flex;
            padding: 25px;
            border-bottom: 1px solid #e6ecf5;

            &:hover {
                background-color: #f8f8f8;
                transition: all .3s ease;
            }
        }

        .result-image {
            width: 40px;
            height: 40px;
            border: 2px solid #a0a0a0;
            border-radius: 100%;
            position: relative;
            margin-right: 15px;
            background-size: cover;
            background-color: white;
        }

        .result-name {
            font-size: 14px;
            font-weight: 700;
            color: #515365;
        }

        .result-description {
            font-size: 12px;
            color: #515365;
        }
    }
</style>
