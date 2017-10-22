<template>
  <div id="app">
    <div class="header">
      <div class="brand">
        <router-link to="/">
          <img src="https://daks2k3a4ib2z.cloudfront.net/59a438062f94ec0001780151/59abf4777ba79400010742be_moms2.png">
        </router-link>
      </div>
      <div class="user-profile">
        <div class="user-profile-image"></div>
        <div>
          <div class="user-name">Louisa Johnson</div>
          <div class="token-count">100 MOM</div>
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
    name: 'app'
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
        background-image: url('https://vignette.wikia.nocookie.net/littlemix/images/9/92/Louisajohnson.jpg/revision/latest?cb=20170521173235');
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
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);

    a {
      padding: 17.5px;
      display: block;
      transition: all .3s ease;

      &.router-link-exact-active, &:hover {
        background-color: #d0d0d0;
      }
    }

    .sidebar-icon {
      background-size: cover;
      width: 40px;
      height: 40px;
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
</style>
