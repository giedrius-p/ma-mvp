<template>
  <div class="news-feed">
    <div class="news-feed-title">News feed</div>

    <div class="posts-filter">
      <div v-for="filter in filters">
        <div class="filter-button"
             :class="{ 'active' : activeFilter === filter.type }"
             v-on:click="onFilterChange(filter)">
          {{filter.title}}
        </div>
      </div>
    </div>
    <div class="posts-wrapper">
      <article class="feed-post" v-for="post in visiblePosts">
        <div class="post-image"
             :class="{ 'courses': post.type === 'COURSE',
                       'marketplace': post.type === 'MARKETPLACE',
                       'jobs-board': post.type === 'JOBS_BOARD' }"
             :style="{ backgroundImage: `url('${post.imageURL}')` }"></div>
        <div class="post-logo-image" :style="{ backgroundImage: `url('${post.logoURL}')` }"></div>
        <div class="post-header">
          {{post.header}}
        </div>
        <div class="post-body">
          {{post.body}}
        </div>
        <div class="post-actions">
          <div class="post-type">
            {{post.typeText}}
          </div>
          <div class="post-reputation">
            <div class="heart-icon"></div>
            <div>{{post.reputationCount}}</div>
          </div>

        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',
    data () {
      return {
        activeFilter: 'ALL',
        filters: [{
          title: 'All types',
          type: 'ALL'
        }, {
          title: 'Courses',
          type: 'COURSE'
        }, {
          title: 'Marketplace',
          type: 'MARKETPLACE'
        }, {
          title: 'Jobs Board',
          type: 'JOBS_BOARD'
        }],
        posts: [{
          header: 'Social media marketing',
          body: 'Learn about the main social media platforms including Facebook and Twitter, how to manage your social media presence, and how to create effective content for each platform.',
          type: 'COURSE',
          typeText: 'Course',
          imageURL: 'https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg',
          logoURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
          reputationCount: 1126
        }, {
          header: 'Sales Strategies: Mastering the Selling Process',
          body: 'This course will explore both Business to Business (B2B) and Business to Consumer (B2C) selling and entrepreneurship issues and concepts. You will explore frameworks that define and clarify the knowledge, skill and discipline to be successful in selling. ',
          type: 'COURSE',
          typeText: 'Course',
          imageURL: 'http://www.jobsite.co.uk/worklife/files/2016/01/sales-project-management-750x400.jpg',
          logoURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
          reputationCount: 10
        }, {
          header: 'Liuti Store - Summer collection sale',
          body: 'Don\'t miss it. Up to 50% less.',
          type: 'MARKETPLACE',
          typeText: 'Marketplace',
          imageURL: 'https://i.imgur.com/vYXUYOr.jpg',
          logoURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
          reputationCount: 236
        }, {
          header: 'Jobs board - Rebecca Henderson - Logo Design - I can create the best premium logo for your business!',
          body: 'The professional logo design process is a rather serious business involving seven distinct stages, all with an aim to create a unique brand.',
          type: 'JOBS_BOARD',
          typeText: 'Jobs Board',
          imageURL: 'https://i.imgur.com/WVDBBwK.png',
          logoURL: 'http://www.woodsandday.com.au/wp-content/uploads/2016/11/Female-Side-comb-O-neck-512.png',
          reputationCount: 54
        }]
      }
    },
    methods: {
      onFilterChange (filter) {
        this.activeFilter = filter.type
      }
    },
    computed: {
      visiblePosts () {
        if (this.activeFilter === 'ALL') {
          return this.posts
        }
        return this.posts.filter(post => post.type === this.activeFilter)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .news-feed {
    padding: 20px 40px;
  }

  .news-feed-title {
    margin: 20px 0 30px;
    text-align: center;
    font-size: 20px;
  }

  .posts-filter {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    .filter-button {
      padding: 10px 20px;
      font-size: 14px;
      color: #888da8;
      background-color: #dee4ec;
      border-radius: 30px;
      margin: 0 10px;
      cursor: pointer;
      transition: all .3s ease;

      &.active, &:hover {
        background-color: #ff5e3a;
        color: #fff;
      }
    }
  }

  .posts-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .feed-post {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
    margin-bottom: 30px;
    padding: 15px;
    flex: 0 0 45%;
    text-align: left;
  }

  .post-image {
    height: 100px;
    margin: -15px -15px 15px -15px;
    background-size: cover;
    position: relative;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.3;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    &.courses:after {
      background-color: #43A047;
    }

    &.marketplace:after {
      background-color: #FFF176;
    }

    &.jobs-board:after {
      background-color: #29B6F6;
    }
  }

  .post-logo-image {
    width: 60px;
    height: 60px;
    border: 2px solid #a0a0a0;
    border-radius: 100%;
    position: relative;
    margin-top: -50px;
    margin-bottom: 10px;
    background-size: cover;
    background-color: white;
  }

  .post-header {
    min-height: 30px;
    margin-bottom: 10px;
    color: #282828;
    font-size: 18px;
  }

  .post-body {
    min-height: 60px;
    margin: 15px 0;
    font-size: 14px;
    flex: 1;
  }

  .post-actions {
    padding: 10px 0 0;
    border-top: 1px solid #e6ecf5;
    min-height: 30px;
    display: flex;

    .post-reputation {
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    .heart-icon {
      background-image: url('https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-24.png');
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
  }
</style>
