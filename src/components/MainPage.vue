<template>
  <div class="news-feed">
    <div class="news-feed-title">News feed</div>

    <div class="posts-wrapper">
      <article class="feed-post" v-for="post in posts">
        <div class="post-image"
             :class="{ courses: post.type === 'COURSE', marketplace: post.type === 'MARKETPLACE' }"
             :style="{ backgroundImage: `url('${post.imageURL}')` }"></div>
        <div class="post-header">
          {{post.header}}
        </div>
        <div class="post-body">
          {{post.body}}
        </div>
        <div class="post-actions">
          {{post.actions}}
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
      posts: [{
        header: 'Social media marketing',
        body: 'Learn about the main social media platforms including Facebook and Twitter, how to manage your social media presence, and how to create effective content for each platform.',
        actions: 'Actions',
        type: 'COURSE',
        imageURL: 'https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg'
      }, {
        header: 'Sales Strategies: Mastering the Selling Process',
        body: 'This course will explore both Business to Business (B2B) and Business to Consumer (B2C) selling and entrepreneurship issues and concepts. You will explore frameworks that define and clarify the knowledge, skill and discipline to be successful in selling. ',
        actions: 'Actions',
        type: 'COURSE',
        imageURL: 'http://www.jobsite.co.uk/worklife/files/2016/01/sales-project-management-750x400.jpg'
      }, {
        header: 'Liuti Store - Summer collection sale',
        body: 'Don\'t miss it. Up to 50% less.',
        actions: 'Actions',
        type: 'MARKETPLACE',
        imageURL: 'https://i.imgur.com/vYXUYOr.jpg'
      }, {
        header: 'Jobs board - Rebecca Henderson - Logo Design - I can create the best premium logo for your business!',
        body: 'The professional logo design process is a rather serious business involving seven distinct stages, all with an aim to create a unique brand.',
        actions: 'Actions',
        type: 'MARKETPLACE',
        imageURL: 'https://i.imgur.com/WVDBBwK.png'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news-feed {
    font-size: 20px;
  }

  .news-feed-title {
    margin: 20px 0 30px;
  }

  .posts-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .feed-post {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2);
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
  }
  .post-image:after {
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

  .post-image.courses:after {
    background-color: #43A047;
  }

  .post-image.marketplace:after {
    background-color: #FFF176;
  }

  .post-header {
    min-height: 30px;
    margin-bottom: 10px;
    color: #282828;
  }

  .post-body {
    min-height: 60px;
    margin: 15px 0;
    font-size: 14px;
  }

  .post-actions {
    padding: 10px 0 0;
    border-top: 1px solid #e6ecf5;
    min-height: 30px;
  }
</style>
