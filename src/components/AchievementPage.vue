<template>
  <div>
    <div class="header-image"></div>
    <div class="achievements-wrapper">
      <div class="achievement" v-for="achievement in achievements">
        <div class="achievement-icon"></div>
        <div>
          <div class="achievement-title">{{achievement.title}}</div>
          <div class="achievement-description">{{achievement.description}}</div>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-active"
               :style="{'width': `${achievement.progress / achievement.max * 220 }px`}"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AchievementPage',
    data () {
      return {
        achievements: [{
          iconURL: '',
          title: 'Title 1',
          description: 'Description 1',
          progress: 75,
          max: 100
        }, {
          iconURL: '',
          title: 'Title 2',
          description: 'Description 2',
          progress: 25,
          max: 100
        }, {
          iconURL: '',
          title: 'Title 3',
          description: 'Description 3',
          progress: 50,
          max: 100
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .header-image {
    height: 250px;
    width: 100%;
    background: #d0d0d0;
    margin-bottom: 20px;
  }

  .achievements-wrapper {
    padding: 20px 40px;
  }

  .achievement {
    display: flex;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);

    .achievement-icon {
      width: 60px;
      height: 60px;
      border: 2px solid #a0a0a0;
      border-radius: 100%;
      position: relative;
      background-size: cover;
      background-color: #d0d0d0;
      margin-right: 10px;
    }

    .achievement-title {
      color: #282828;
      font-size: 16px;
      font-weight: 700;
    }

    .achievement-description {
      font-size: 14px;
    }

    .progress-bar {
      height: 6px;
      width: 220px;
      background-color: #ebecf2;
      border-radius: 10px;
      margin-left: auto;

      .progress-bar-active {
        height: 100%;
        background: linear-gradient(to right, #ff613a, #ff9432);
      }
    }
  }
</style>
